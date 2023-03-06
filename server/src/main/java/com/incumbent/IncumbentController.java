package com.example.incumbent;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
public class IncumbentController {

    @Autowired
    private IncumbentService incumbentService;

    // @RequestMapping("/incumbents")
    // public List<Incumbent> getAllIncumbents() {
    // return incumbentService.getAllIncumbents();
    // }

    // @RequestMapping("/incumbents/{district}")
    // public Incumbent getIncumbent(@PathVariable Integer district) {
    // return incumbentService.getIncumbent(district);
    // }
    @CrossOrigin(maxAge = 3600)
    @RequestMapping("/incumbents/{state}")
    public List<Incumbent> getStateIncumbents(@PathVariable String state) {
        return incumbentService.getStateIncumbents(state);
    }

}