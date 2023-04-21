package com.example.warriors.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.StateID;

public interface IncumbentRepository extends MongoRepository<Incumbent, String> {

    public List<Incumbent> findByState(StateID state);

}
