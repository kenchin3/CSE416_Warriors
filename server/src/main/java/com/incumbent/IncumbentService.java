package com.example.incumbent;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class IncumbentService {
    private List<Incumbent> incumbents = new ArrayList<>(
        Arrays.asList(
            new Incumbent(1, "Kevin Hern", true, "Rep", 0.675, 0.955),
            new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
            new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960)
        )
    );

    public List<Incumbent> getAllIncumbents() {
        return incumbents;
    }

    public Incumbent getIncumbent(Integer district) {
        return incumbents.stream().filter(t -> t.getDistrict().equals(district)).findFirst().get();
    }
}