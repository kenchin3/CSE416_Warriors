package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.StateID;
import com.example.warriors.model.Map;
import mil.nga.sf.geojson.FeatureCollection;

public interface MapRepository extends MongoRepository<Map, String> {

    // public List<Incumbent> findByState(State state);

}
