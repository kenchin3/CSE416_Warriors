package com.example.warriors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.warriors.model.District;
import com.example.warriors.model.State;
import com.example.warriors.model.DistrictID;
import com.example.warriors.repository.DistrictRepository;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class DistrictController {
    @Autowired
    DistrictRepository districtRepository;

    @PostMapping("/addDistrict")
    public District addDistrict(@RequestBody District district) {
        return districtRepository.save(district);
    }

    @GetMapping("/getAllDistrict")
    public List<District> getAllDistrict() {
        return districtRepository.findAll();
    }

    @GetMapping("/getDistrictByState")
    public List<District> getDistrictByState(@RequestParam("state") State state) {
        return districtRepository.findByState(state);
    }

}
