package com.example.incumbent;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    // @RequestMapping("/incumbents")
    // public List<Incumbent> getAllIncumbents() {
    // return incumbentService.getAllIncumbents();
    // }

    // @RequestMapping("/incumbents/{district}")
    // public Incumbent getIncumbent(@PathVariable Integer district) {
    // return incumbentService.getIncumbent(district);
    // }

    @RequestMapping("/district/{state}")
    public List<District> getDistrictByState(@PathVariable String state) {
        return districtService.getDistrictByState(state);
    }

    @RequestMapping("/district")
    public Map<String, List<District>> getAllDistricts() {
        return districtService.getAllDistricts();
    }

}