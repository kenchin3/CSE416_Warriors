package com.example.incumbent;

// import java.util.Map.Entry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class IncumbentService {
    // Map<String, List<Incumbent>> stateIncumbent = new HashMap<String,
    // List<Incumbent>>() {{
    // put("ok", new ArrayList<>(
    // Arrays.asList(
    // new Incumbent(1, "Kevin Hern", true, "Rep", 0.675, 0.955),
    // new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
    // new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960)
    // )
    // ));
    // }};
    Map<String, List<Incumbent>> stateIncumbents = Map.ofEntries(
            Map.entry("ok", new ArrayList<>(
                    Arrays.asList(
                            new Incumbent(1, "Kevin Hern", true, "Rep", 0.675, 0.955),
                            new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
                            new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960),
                            new Incumbent(4, "Tom Cole", true, "Rep", 1.011, 0.991),
                            new Incumbent(5, "Stephanie Bice", true, "Rep", 0.170, 1.096)))),
            Map.entry("tn", new ArrayList<>(
                    Arrays.asList(
                            new Incumbent(1, "Kevin Hern", true, "Rep", 0.675, 0.955),
                            new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
                            new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960),
                            new Incumbent(4, "Tom Cole", true, "Rep", 1.011, 0.991),
                            new Incumbent(5, "Stephanie Bice", true, "Rep", 0.170, 1.096)))),
            Map.entry("pa", new ArrayList<>(
                    Arrays.asList(
                            new Incumbent(1, "Brian Fitzpatrick", true, "Rep", 0.675, 0.955),
                            new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
                            new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960),
                            new Incumbent(4, "Tom Cole", true, "Rep", 1.011, 0.991),
                            new Incumbent(5, "Stephanie Bice", true, "Rep", 0.170, 1.096))))

    );

    // private List<Incumbent> incumbents = new ArrayList<>(
    // Arrays.asList(
    // new Incumbent(1, "Kevin Hern", true, "Rep", 0.675, 0.955),
    // new Incumbent(2, "Josh Brecheen", true, "Rep", 0.657, 1.008),
    // new Incumbent(3, "Frank Lucas", true, "Rep", 15.863, 0.960)
    // )
    // );

    // public List<Incumbent> getAllIncumbents() {
    // return incumbents;
    // }

    // public Incumbent getIncumbent(Integer district) {
    // return incumbents.stream().filter(t ->
    // t.getDistrict().equals(district)).findFirst().get();
    // }

    public List<Incumbent> getStateIncumbents(String state) {
        return stateIncumbents.get(state);
    }
}