package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.District;
import com.example.warriors.model.StateID;

public interface DistrictRepository extends MongoRepository<District, String> {

    public List<District> findByState(StateID state);

}
