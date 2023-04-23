package com.example.warriors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.Party;
import com.example.warriors.model.DistrictPlanID;
import com.example.warriors.model.Ensemble;
import com.example.warriors.model.BoxAndWhisker;
import com.example.warriors.model.District;
import com.example.warriors.model.State;
import com.example.warriors.model.Map;
import com.example.warriors.repository.IncumbentRepository;
import com.example.warriors.repository.MapRepository;
import com.example.warriors.repository.DistrictRepository;
import com.example.warriors.repository.EnsembleRepository;
import com.example.warriors.repository.BoxAndWhiskerRepository;
import com.example.warriors.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import mil.nga.sf.geojson.FeatureConverter;
import mil.nga.sf.geojson.FeatureCollection;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@SpringBootApplication
public class WarriorsApplication implements CommandLineRunner {

	@Autowired
	private IncumbentRepository incumbentRepository;
	@Autowired
	private MapRepository mapRepository;
	@Autowired
	private DistrictRepository districtRepository;
	@Autowired
	private BoxAndWhiskerRepository boxAndWhiskerRepository;
	@Autowired
	private StateRepository stateRepository;
	@Autowired
	private EnsembleRepository ensembleRepository;

	public static void main(String[] args) {
		SpringApplication.run(WarriorsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		populateAll();
	}

	public void populateAll() {
		try {
			populateIncumbent();
			populateDistrict();
			populateBoxAndWhisker();
			populateMap();
			populateEnsmeble();
			populateState();

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void populateIncumbent() throws IOException, FileNotFoundException {
		try {
			incumbentRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/Incumbent.json"));
			JSONArray jsonArray = (JSONArray) obj;

			jsonArray.forEach(item -> {
				JSONObject incumbent = (JSONObject) item;
				String name = (String) incumbent.get("name");
				Party party = Party.valueOf((String) incumbent.get("party"));
				StateID state = StateID.valueOf((String) incumbent.get("state"));
				Boolean electionResult = (Boolean) incumbent.get("electionResult");
				String district = (String) incumbent.get("district");
				incumbentRepository.save(new Incumbent(name, party, electionResult, district,
						state));
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateDistrict() throws IOException, FileNotFoundException {
		try {
			districtRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/District.json"));
			JSONArray jsonArray = (JSONArray) obj;

			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				String district = (String) districtObj.get("district");
				Double population = Double.parseDouble((String) districtObj.get("population"));
				Double area = Double.parseDouble((String) districtObj.get("area"));
				District newDistrict = new District(districtPlanID, state, district, population, area);
				districtRepository.save(newDistrict);
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateBoxAndWhisker() throws IOException, FileNotFoundException {
		try {
			boxAndWhiskerRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/BoxAndWhisker.json"));
			JSONArray jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject boxAndWhisker = (JSONObject) item;
				StateID state = StateID.valueOf((String) boxAndWhisker.get("state"));

				String type = (String) boxAndWhisker.get("type");
				JSONArray bowArr = (JSONArray) boxAndWhisker.get("data");

				Double[][] result = new Double[bowArr.size()][];
				for (int i = 0; i < bowArr.size(); i++) {

					JSONArray innerArray = (JSONArray) bowArr.get(i);
					Double[] innerResult = new Double[innerArray.size()];

					for (int j = 0; j < innerArray.size(); j++) {
						innerResult[j] = Double.valueOf((String) innerArray.get(j));
					}

					result[i] = innerResult;
				}
				boxAndWhiskerRepository.save(new BoxAndWhisker(state, type, result));

			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateEnsmeble() throws IOException, FileNotFoundException {
		try {
			ensembleRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/Ensemble.json"));
			JSONArray jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject ensemble = (JSONObject) item;
				StateID state = StateID.valueOf((String) ensemble.get("state"));
				Double avgGeoVar = Double.parseDouble((String) ensemble.get("avgGeoVar"));
				Double avgPopVar = Double.parseDouble((String) ensemble.get("avgPopVar"));
				Integer incumbentWin = Integer.parseInt((String) ensemble.get("incumbentWin"));
				List<BoxAndWhisker> boxAndWhiskers = boxAndWhiskerRepository.findByState(state);
				ensembleRepository.save(new Ensemble(state, boxAndWhiskers, avgGeoVar, avgPopVar, incumbentWin));
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateMap() throws IOException, FileNotFoundException {
		try {
			mapRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/ok2022.json"));
			JSONObject map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.OK, DistrictPlanID.YR20, map));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateState() throws IOException, FileNotFoundException, ParseException {
		try {
			StateID state = StateID.OK;
			stateRepository.deleteAll();
			List<Incumbent> incumbents = incumbentRepository.findByState(state);
			List<District> districts = districtRepository.findByState(state);
			List<Map> maps = mapRepository.findByState(state);
			Ensemble ensemble = ensembleRepository.findByState(state);
			stateRepository.save(new State(state, districts, incumbents, maps, ensemble));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
