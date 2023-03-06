package com.example.incumbent;

// import java.util.Map.Entry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class DistrictService {
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
        Map<String, List<District>> stateDistricts = Map.ofEntries(
                        Map.entry("ok", new ArrayList<>(
                                        Arrays.asList(
                                                        new District(1, "Kevin Hern", 828677, 791871, 1632.170,
                                                                        32900.699),
                                                        new District(2, "Josh Brecheen", 791871, 798552, 1103.297,
                                                                        9777.448),
                                                        new District(3, "Frank Lucas", 785191, 791870, 34116.192,
                                                                        9891.652),
                                                        new District(4, "Tom Cole", 791871, 722078, 22414.755,
                                                                        20996.362),
                                                        new District(5, "Stephanie Bice", 824855, 791870, 2074.038,
                                                                        3584.012)))),
                        Map.entry("tn", new ArrayList<>(
                                        Arrays.asList(
                                                        new District(1, "Diana Harshbarger", 705123, 772206, 4141.92,
                                                                        4475.068),
                                                        new District(2, "Tim Burchett", 705123, 783395, 2320.68,
                                                                        2690.451),
                                                        new District(3, "Charles J. Fleischmann", 705122, 776693,
                                                                        4570.32, 4075.389),
                                                        new District(4, "Scott DesJarlais", 705123, 781570, 5984.84,
                                                                        6582.199),
                                                        new District(5, "Jim Cooper", 705123, 775588, 1248.57,
                                                                        2082.419),
                                                        new District(6, "John Rose", 705123, 784694, 6474.21, 6056.141),
                                                        new District(7, "Mark Green", 705123, 784694, 9160.44,
                                                                        6046.995),
                                                        new District(8, "David Kustoff", 705123, 764865, 6850.53,
                                                                        9399.594),
                                                        new District(9, "Steve Cohene", 705123, 767682, 483.39,
                                                                        810.385)))),
                        Map.entry("pa", new ArrayList<>(
                                        Arrays.asList(
                                                        new District(1, "Brian Fitzpatrick", 763834, 764866, 655.201,
                                                                        67.542),
                                                        new District(2, "Brendan Boyle", 767191, 764865, 65.945,
                                                                        2842.798),
                                                        new District(3, "Dwight Evans", 741180, 764864, 480.801,
                                                                        1185.651),
                                                        new District(4, "Madeleine Dean", 771749, 764865, 221.704,
                                                                        54.859),
                                                        new District(5, "Mary Gay Scanlon", 754121, 764866, 922.566,
                                                                        718.911),
                                                        new District(6, "Chrissy Houlahan", 768151, 764864, 867.563,
                                                                        734.363),
                                                        new District(7, "Susan Wild", 771318, 764865, 1117.711,
                                                                        239.865),
                                                        new District(8, "Matt Cartwright", 763499, 764866, 1545.007,
                                                                        936.838),
                                                        new District(9, "Dan Meuser", 766968, 764864, 9975.768,
                                                                        6158.914),
                                                        new District(10, "Scott Perry", 764361, 764864, 6049.108,
                                                                        1546.909),
                                                        new District(11, "Lloyd Smucker", 772986, 764864, 2864.952,
                                                                        1295.685),
                                                        new District(12, "Summer Lee", 756600, 764864, 9808.608,
                                                                        910.015),
                                                        new District(13, "John Joyce", 762589, 764864, 4110.076,
                                                                        434.221),
                                                        new District(14, "Guy Reschenthaler", 761114, 764866, 897.920,
                                                                        4814.387),
                                                        new District(15, "Glenn Thompson", 758343, 764864, 299.887,
                                                                        6410.728),
                                                        new District(16, "Mike Kelly", 763417, 764865, 2731.955,
                                                                        4652.711),
                                                        new District(17, "Conor Lamb", 756635, 764864, 3326.210,
                                                                        13094.271)

                                        )))

        );

        public List<District> getDistrictByState(String state) {
                return stateDistricts.get(state);
        }

        public Map<String, List<District>> getAllDistricts() {
                return stateDistricts;
        }
}