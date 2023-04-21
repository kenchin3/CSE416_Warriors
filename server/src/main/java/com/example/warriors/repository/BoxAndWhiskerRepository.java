package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.BoxAndWhisker;
import com.example.warriors.model.StateID;

public interface BoxAndWhiskerRepository extends MongoRepository<BoxAndWhisker, String> {

    public List<BoxAndWhisker> findByState(StateID state);

}
