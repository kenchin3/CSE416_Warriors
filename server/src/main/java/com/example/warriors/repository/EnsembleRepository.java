package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.Ensemble;
import com.example.warriors.model.StateID;

public interface EnsembleRepository extends MongoRepository<Ensemble, String> {

    public List<Ensemble> findByState(StateID state);

}
