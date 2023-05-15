package com.example.warriors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.Party;
import com.example.warriors.model.DistrictPlanID;
import com.example.warriors.model.Ensemble;
import com.example.warriors.model.BoxAndWhisker;
import com.example.warriors.model.State;
import com.example.warriors.model.Map;
import com.example.warriors.model.DistrictEnsemble;
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

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.core.MongoTemplate;
import com.example.warriors.model.LoadFile;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

import com.mongodb.client.gridfs.model.GridFSFile;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@SpringBootApplication
public class WarriorsApplication implements CommandLineRunner {

	@Autowired
	private BoxAndWhiskerRepository boxAndWhiskerRepository;
	@Autowired
	private StateRepository stateRepository;
	@Autowired
	private EnsembleRepository ensembleRepository;
	@Autowired
	private DistrictEnsembleRepository districtEnsembleRepository;
	@Autowired
	private GridFsTemplate gridFsTemplate;
	@Autowired
	private MongoTemplate mongoTemplate;
	@Autowired
	private GridFsOperations operations;

	public static void main(String[] args) {
		SpringApplication.run(WarriorsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		populateAll();
	}

	public void populateAll() {
		try {

			populateBoxAndWhisker();
			populateEnsmeble();
			populateState();
			populateDistrictEnsemble();
			populateFile();

		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void populateDistrictEnsemble() throws IOException, FileNotFoundException {
		try {
			districtEnsembleRepository.deleteAll();
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(new FileReader("resources/DistrictEnsembleTN.json"));
			JSONArray jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtObj, state, districtPlanID);
				districtEnsembleRepository.save(newDistrictEnsemble);
			});

			obj = parser.parse(new FileReader("resources/DistrictEnsemblePA.json"));
			jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtObj, state, districtPlanID);
				districtEnsembleRepository.save(newDistrictEnsemble);
			});

			obj = parser.parse(new FileReader("resources/DistrictEnsembleOK.json"));
			jsonArray = (JSONArray) obj;
			jsonArray.forEach(item -> {
				JSONObject districtObj = (JSONObject) item;
				StateID state = StateID.valueOf((String) districtObj.get("state"));
				DistrictPlanID districtPlanID = DistrictPlanID.valueOf((String) districtObj.get("districtPlanID"));
				DistrictEnsemble newDistrictEnsemble = new DistrictEnsemble(districtObj, state, districtPlanID);
				districtEnsembleRepository.save(newDistrictEnsemble);
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

	public void populateState() throws IOException, FileNotFoundException, ParseException {
		try {
			stateRepository.deleteAll();

			StateID state = StateID.OK;
			List<DistrictEnsemble> districtsYR22 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.YR22);
			List<DistrictEnsemble> districtsRandom1 = districtEnsembleRepository.findByStateAndDistrictPlanID(
					state,
					DistrictPlanID.RANDOM1);
			List<DistrictEnsemble> districtsRandom2 = districtEnsembleRepository.findByStateAndDistrictPlanID(
					state,
					DistrictPlanID.RANDOM2);
			List<DistrictEnsemble> districtsRandom3 = districtEnsembleRepository.findByStateAndDistrictPlanID(
					state,
					DistrictPlanID.RANDOM3);
			// List<Map> maps = mapRepository.findByState(state);
			Ensemble ensemble = ensembleRepository.findByState(state);
			stateRepository.save(
					new State(state, districtsYR22.get(0), districtsRandom1.get(0), districtsRandom2.get(0),
							districtsRandom3.get(0), ensemble));

			state = StateID.PA;

			districtsYR22 = districtEnsembleRepository.findByStateAndDistrictPlanID(state, DistrictPlanID.YR22);
			districtsRandom1 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM1);
			districtsRandom2 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM2);
			districtsRandom3 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM3);
			// maps = mapRepository.findByState(state);
			ensemble = ensembleRepository.findByState(state);
			stateRepository.save(
					new State(state, districtsYR22.get(0), districtsRandom1.get(0), districtsRandom2.get(0),
							districtsRandom3.get(0), ensemble));

			state = StateID.TN;

			districtsYR22 = districtEnsembleRepository.findByStateAndDistrictPlanID(state, DistrictPlanID.YR22);
			districtsRandom1 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM1);
			districtsRandom2 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM2);
			districtsRandom3 = districtEnsembleRepository.findByStateAndDistrictPlanID(state,
					DistrictPlanID.RANDOM3);
			// maps = mapRepository.findByState(state);
			ensemble = ensembleRepository.findByState(state);
			stateRepository.save(
					new State(state, districtsYR22.get(0), districtsRandom1.get(0), districtsRandom2.get(0),
							districtsRandom3.get(0), ensemble));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public void populateFile() throws IOException, FileNotFoundException, ParseException {
		mongoTemplate.remove(new Query(), "fs.chunks");
		mongoTemplate.remove(new Query(), "fs.files");

		InputStream inputStream = new FileInputStream("resources/tnRandom1.json");
		DBObject metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "tnRandom1", "application/json", metadata);

		inputStream = new FileInputStream("resources/tnRandom2.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "tnRandom2", "application/json", metadata);

		inputStream = new FileInputStream("resources/tnRandom3.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "tnRandom3", "application/json", metadata);

		inputStream = new FileInputStream("resources/okRandom1.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "okRandom1", "application/json", metadata);

		inputStream = new FileInputStream("resources/okRandom2.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "okRandom2", "application/json", metadata);

		inputStream = new FileInputStream("resources/okRandom3.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "okRandom3", "application/json", metadata);

		inputStream = new FileInputStream("resources/paRandom1.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "paRandom1", "application/json", metadata);

		inputStream = new FileInputStream("resources/paRandom2.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "paRandom2", "application/json", metadata);

		inputStream = new FileInputStream("resources/paRandom3.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "paRandom3", "application/json", metadata);

		inputStream = new FileInputStream("resources/pa2020.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "pa2020", "application/json", metadata);

		inputStream = new FileInputStream("resources/pa2022.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "pa2022", "application/json", metadata);

		inputStream = new FileInputStream("resources/ok2020.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "ok2020", "application/json", metadata);

		inputStream = new FileInputStream("resources/ok2022.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "ok2022", "application/json", metadata);

		inputStream = new FileInputStream("resources/tn2020.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "tn20020", "application/json", metadata);

		inputStream = new FileInputStream("resources/tn2022.json");
		metadata = new BasicDBObject();
		metadata.put("fileSize", 1234);
		gridFsTemplate.store(inputStream, "tn2022", "application/json", metadata);

	}

}
