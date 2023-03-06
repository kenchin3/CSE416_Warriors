package com.example.incumbent;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class IncumbentController {

    @Autowired
    private IncumbentService incumbentService;

    // @RequestMapping("/incumbents")
    // public List<Incumbent> getAllIncumbents() {
    //     return incumbentService.getAllIncumbents();
    // }

    // @RequestMapping("/incumbents/{district}")
    // public Incumbent getIncumbent(@PathVariable Integer district) {
    //     return incumbentService.getIncumbent(district);
    // }

    @RequestMapping("/incumbents/{state}")
    public List<Incumbent> getStateIncumbents(@PathVariable String state) {
        return incumbentService.getStateIncumbents(state);
    }


}