package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.State;
import com.example.warriors.model.StateID;

public interface StateRepository extends MongoRepository<State, String> {

    public State findByState(StateID state);

}
