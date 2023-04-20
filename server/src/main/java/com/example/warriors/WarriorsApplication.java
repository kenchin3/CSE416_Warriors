package com.example.warriors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.warriors.model.State;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.Party;
import com.example.warriors.repository.IncumbentRepository;
import com.example.warriors.repository.MapRepository;
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

	public static void main(String[] args) {
		SpringApplication.run(WarriorsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		populateAll();
	}

	public void populateAll() {
		incumbentRepository.deleteAll();

		try {
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/Incumbent.json"));
			JSONArray jsonArray = (JSONArray) obj;

			jsonArray.forEach(item -> {
				JSONObject incumbent = (JSONObject) item;
				String name = (String) incumbent.get("name");
				Party party = Party.valueOf((String) incumbent.get("party"));
				State state = State.valueOf((String) incumbent.get("state"));
				Boolean electionResult = (Boolean) incumbent.get("electionResult");
				String district = (String) incumbent.get("district");
				incumbentRepository.save(new Incumbent(name, party, electionResult, district, state));

			});

		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
