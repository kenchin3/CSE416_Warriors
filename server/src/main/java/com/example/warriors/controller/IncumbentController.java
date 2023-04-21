package com.example.warriors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.StateID;
import com.example.warriors.repository.IncumbentRepository;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class IncumbentController {
    @Autowired
    IncumbentRepository incumbentRepository;

    @PostMapping("/addIncumbent")
    public Incumbent addIncumbent(@RequestBody Incumbent incumbent) {
        return incumbentRepository.save(incumbent);
    }

    @GetMapping("/getAllIncumbent")
    public List<Incumbent> getAllIncumbent() {
        return incumbentRepository.findAll();
    }

    @GetMapping("/getIncumbentByState")
    public List<Incumbent> getIncumbentByState(@RequestParam("state") StateID state) {
        return incumbentRepository.findByState(state);
    }

}
