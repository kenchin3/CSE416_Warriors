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
import com.example.warriors.model.DistrictEnsemble;
import com.example.warriors.repository.IncumbentRepository;
import com.example.warriors.repository.MapRepository;
import com.example.warriors.repository.DistrictRepository;
import com.example.warriors.repository.EnsembleRepository;
import com.example.warriors.repository.BoxAndWhiskerRepository;
import com.example.warriors.repository.StateRepository;
import com.example.warriors.repository.DistrictEnsembleRepository;
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
import java.io.*;
import java.util.*;

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
	@Autowired
	private DistrictEnsembleRepository districtEnsembleRepository;

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
			populateDistrictEnsemble();

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
			Object obj = parser.parse(new FileReader("resources/District1.json"));
			JSONArray jsonArray = (JSONArray) obj;

			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				String district = (String) districtObj.get("district");
				Double population = Double.parseDouble((String) districtObj.get("population"));
				Double area = Double.parseDouble((String) districtObj.get("area"));
				Double popVar = Double.parseDouble((String) districtObj.get("popVar"));
				Double geoVar = Double.parseDouble((String) districtObj.get("geoVar"));
				Double popDiff = Double.parseDouble((String) districtObj.get("popDiff"));
				Double geoDiff = Double.parseDouble((String) districtObj.get("geoDiff"));
				District newDistrict = new District(districtPlanID, state, district, population, area, popVar, geoVar,
						popDiff, geoDiff);
				districtRepository.save(newDistrict);
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateDistrictEnsemble() throws IOException, FileNotFoundException {
		try {
			districtEnsembleRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/DistrictEnsemble.json"));
			JSONArray jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtObj, state, districtPlanID);
				districtEnsembleRepository.save(newDistrictEnsemble);
				// DistrictPlanID districtPlanID = DistrictPlanID
				// .valueOf((String) districtObj.get("districtPlanID"));
				// StateID state = StateID.valueOf((String) districtObj.get("state"));
				// Double safeDem = Double.valueOf(districtObj.get("safe_dem").toString());
				// Double safeRep = Double.valueOf(districtObj.get("safe_rep").toString());
				// Double openDem = Double.valueOf(districtObj.get("open_Dem").toString());
				// Double openRep =
				// Double.valueOf(districtObj.get("incumbents_win").toString());
				// Double incumbentWin =
				// Double.valueOf(districtObj.get("dem_split").toString());
				// JSONArray districts = (JSONArray) districtObj.get("districts");
				// DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtPlanID,
				// state, safeDem, safeRep,
				// openDem, openRep, incumbentWin, districts);
				// districtEnsembleRepository.save(newDistrictEnsemble);
			});
			// JSONParser parser = new JSONParser();
			// Object obj = parser.parse(new FileReader("resources/DistrictEnsemble.json"));
			// JSONArray jsonArray = (JSONArray) obj;

			// jsonArray.forEach(item -> {
			// JSONObject districtObj = (JSONObject) item;
			// DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String)
			// districtObj.get("districtPlanID"));
			// StateID state = StateID.valueOf((String) districtObj.get("state"));
			// String district = (String) districtObj.get("district");
			// String winner = (String) districtObj.get("winner");
			// String safeSeat = (String) districtObj.get("safe_seat");
			// Double demSplit = Double.valueOf(districtObj.get("dem_split").toString());
			// Double rebSplit = Double.valueOf(districtObj.get("rep_split").toString());
			// Double popDiff = Double.valueOf(districtObj.get("pop_diff").toString());
			// Double geoDiff = Double.valueOf(districtObj.get("geo_diff").toString());
			// DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtPlanID,
			// state, district, popDiff,
			// geoDiff, safeSeat, demSplit, rebSplit, winner);
			// districtEnsembleRepository.save(newDistrictEnsemble);
			// });
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
						innerResult[j] = (Double) innerArray.get(j);
					}

					result[i] = innerResult;
				}

				Double[] result2 = new Double[bowArr.size()];
				JSONArray dotsArr = (JSONArray) boxAndWhisker.get("dots22");
				for (int i = 0; i < dotsArr.size(); i++) {
					result2[i] = (Double) dotsArr.get(i);
				}
				boxAndWhiskerRepository.save(new BoxAndWhisker(state, type, result, result2));

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
			Object obj = parser.parse(new FileReader("resources/ok2020.json"));
			JSONObject map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.OK, DistrictPlanID.YR20, map));

			obj = parser.parse(new FileReader("resources/ok2022.json"));
			map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.OK, DistrictPlanID.YR22, map));

			obj = parser.parse(new FileReader("resources/tn2020.json"));
			map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.TN, DistrictPlanID.YR20, map));

			obj = parser.parse(new FileReader("resources/tn2022.json"));
			map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.TN, DistrictPlanID.YR22, map));

			obj = parser.parse(new FileReader("resources/pa2020.json"));
			map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.PA, DistrictPlanID.YR20, map));

			obj = parser.parse(new FileReader("resources/pa2022.json"));
			map = (JSONObject) obj;
			mapRepository.save(new Map(StateID.PA, DistrictPlanID.YR22, map));

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void populateState() throws IOException, FileNotFoundException, ParseException {
		try {
			stateRepository.deleteAll();

			StateID state = StateID.OK;
			List<Incumbent> incumbents = incumbentRepository.findByState(state);
			List<District> districts = districtRepository.findByState(state);
			List<DistrictEnsemble> districtEnsembles = districtEnsembleRepository.findByState(state);
			List<Map> maps = mapRepository.findByState(state);
			Ensemble ensemble = ensembleRepository.findByState(state);
			stateRepository.save(new State(state, districts, districtEnsembles, incumbents, maps, ensemble));

			state = StateID.PA;
			incumbents = incumbentRepository.findByState(state);
			districts = districtRepository.findByState(state);
			districtEnsembles = districtEnsembleRepository.findByState(state);
			maps = mapRepository.findByState(state);
			ensemble = ensembleRepository.findByState(state);
			stateRepository.save(new State(state, districts, districtEnsembles, incumbents, maps, ensemble));

			state = StateID.TN;
			incumbents = incumbentRepository.findByState(state);
			districts = districtRepository.findByState(state);
			districtEnsembles = districtEnsembleRepository.findByState(state);
			maps = mapRepository.findByState(state);
			ensemble = ensembleRepository.findByState(state);
			stateRepository.save(new State(state, districts, districtEnsembles, incumbents, maps, ensemble));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
