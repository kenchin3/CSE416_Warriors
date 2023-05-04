package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.DistrictEnsemble;
import com.example.warriors.model.StateID;

public interface DistrictEnsembleRepository extends MongoRepository<DistrictEnsemble, String> {

    public List<DistrictEnsemble> findByState(StateID state);

}
