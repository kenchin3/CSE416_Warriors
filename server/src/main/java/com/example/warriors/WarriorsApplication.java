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
	private StateRepository ensembleRepository;

	public static void main(String[] args) {
		SpringApplication.run(WarriorsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		populateAll();
	}

	public void populateAll() {
		incumbentRepository.deleteAll();
		districtRepository.deleteAll();

		try {
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
			// JSONParser parser = new JSONParser();
			obj = parser.parse(new FileReader("resources/District.json"));
			jsonArray = (JSONArray) obj;

			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				String district = (String) districtObj.get("district");
				Double population = Double.parseDouble((String) districtObj.get("population"));
				Double area = Double.parseDouble((String) districtObj.get("area"));
				District newDistrict = new District(districtPlanID, state, district, population, area);
				System.out.println(newDistrict);
				districtRepository.save(newDistrict);
			});

			obj = parser.parse(new FileReader("resources/BoxAndWhisker.json"));
			jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject boxAndWhisker = (JSONObject) item;
				StateID state = StateID.valueOf((String) boxAndWhisker.get("state"));
				String type = (String) boxAndWhisker.get("type");
				Double q1 = Double.parseDouble((String) boxAndWhisker.get("q1"));
				Double q2 = Double.parseDouble((String) boxAndWhisker.get("q2"));
				Double q3 = Double.parseDouble((String) boxAndWhisker.get("q3"));
				Double max = Double.parseDouble((String) boxAndWhisker.get("max"));
				Double min = Double.parseDouble((String) boxAndWhisker.get("min"));
				boxAndWhiskerRepository.save(new BoxAndWhisker(state, type, q1, q3, q2, max, min));

			});

			obj = parser.parse(new FileReader("resources/Ensemble.json"));
			jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject ensemble = (JSONObject) item;
				StateID state = StateID.valueOf((String) ensemble.get("state"));
				String type = (String) ensemble.get("type");
				Double avgGeoVar = Double.parseDouble((String) ensemble.get("avgGeoVar"));
				Double avgPopVar = Double.parseDouble((String) ensemble.get("avgPopVar"));
				Integer incumbentWin = Integer.parseInt((String) ensemble.get("incumbentWin"));
				List<BoxAndWhisker> boxAndWhiskers = boxAndWhiskerRepository.findByState(state);
				ensembleRepository
						.save(new Ensemble(state, boxAndWhiskers, avgGeoVar, avgPopVar, incumbentWin));

			});

			// Ensemble ensemble =

			// ensembleRepository.save

			// StateID state = StateID.OK
			// List<Incumbent> incumbents = incumbentRepository.findByState(state);
			// List<District> districts = districtRepository.findByState(state);
			// Ensemble ensemble = ensembleRepository,.
			// stateRepository.save(new State())

		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
