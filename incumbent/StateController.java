package com.example.incumbent;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController

public class StateController {
    @Autowired
    //private DistrictService districtService;
    private StateService stateService;

    @RequestMapping("/states/{state}")
    public List<State> getStateByName(@PathVariable String state) {
        return stateService.getStateByName(state);
    }

}
