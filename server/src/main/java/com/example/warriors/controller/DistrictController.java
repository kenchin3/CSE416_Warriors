package com.example.warriors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.warriors.model.District;
import com.example.warriors.model.DistrictEnsemble;
import com.example.warriors.model.StateID;
import com.example.warriors.model.DistrictPlanID;
import com.example.warriors.repository.DistrictRepository;
import com.example.warriors.repository.DistrictEnsembleRepository;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class DistrictController {
    @Autowired
    DistrictRepository districtRepository;
    @Autowired
    DistrictEnsembleRepository districtEnsembleRepository;

    @PostMapping("/addDistrict")
    public District addDistrict(@RequestBody District district) {
        return districtRepository.save(district);
    }

    @GetMapping("/getAllDistrict")
    public List<District> getAllDistrict() {
        return districtRepository.findAll();
    }

    @GetMapping("/getDistrictByState")
    public List<District> getDistrictByState(@RequestParam("state") StateID state) {
        return districtRepository.findByState(state);
    }

    // @GetMapping("/getAllDistrictEnsemble")
    // public List<DistrictEnsemble> getAllDistrictEnsemble() {
    // return districtEnsembleRepository.findAll();
    // }

    // @GetMapping("/getDistrictEnsembleByState")
    // public List<DistrictEnsemble>
    // getAllDistrictEnsembleByStateDistricts(@RequestParam("state") StateID state)
    // {
    // return districtEnsembleRepository.findByState(state);
    // }

}
