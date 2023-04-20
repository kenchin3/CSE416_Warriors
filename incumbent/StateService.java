package com.example.incumbent;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class StateService {
    Map<String, List<State>> states = Map.ofEntries(
            Map.entry("ok", new ArrayList<>(
                    Arrays.asList(
                            new State("Kevin Hern")))),
            Map.entry("tn", new ArrayList<>(
                    Arrays.asList(
                            new State("Stephanie Bice")))),
            Map.entry("pa", new ArrayList<>(
                    Arrays.asList(
                            new State("Frank Lucas"))))
    );

    public List<State> getStateByName(String state) {
        return states.get(state);
    }
}