package com.example.warriors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.StateID;
import com.example.warriors.repository.MapRepository;
import mil.nga.sf.geojson.FeatureCollection;
import com.example.warriors.model.Map;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class MapController {
    @Autowired
    MapRepository mapRepository;

    @GetMapping("/getAllMap")
    public List<Map> getAllMap() {
        return mapRepository.findAll();
    }

    @GetMapping("/getMapByState")
    public List<Map> getIncumbentByState(@RequestParam("state") StateID state) {
        return mapRepository.findByState(state);
    }

}
