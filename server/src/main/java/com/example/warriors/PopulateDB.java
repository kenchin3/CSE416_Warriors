package com.example.warriors;

import com.example.warriors.model.State;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.Party;
import com.example.warriors.repository.IncumbentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class PopulateDB implements CommandLineRunner {
    @Autowired
    private IncumbentRepository incumbentRepository;

    @Override
    public void run(String... args) throws Exception {

        incumbentRepository.deleteAll();
        // incumbentRepository.save(incumbent);
        // Incumbent incumbent = new Incumbent("Kevin Hern", Party.REP, true, "1",
        // State.OK);
        incumbentRepository.save(new Incumbent("Kevin Hern", Party.REP, true, "1", State.OK));
        incumbentRepository.save(new Incumbent("Markwayne Mullin", Party.REP, true, "2", State.OK));
        incumbentRepository.save(new Incumbent("Frank Lucas", Party.REP, true, "3", State.OK));
        incumbentRepository.save(new Incumbent("Tom Cole", Party.REP, true, "4", State.OK));
        incumbentRepository.save(new Incumbent("Stephanie Bice", Party.REP, true, "5", State.OK));

        incumbentRepository.save(new Incumbent("Diana Harshbarger ", Party.REP, true, "1", State.TN));
        incumbentRepository.save(new Incumbent("Tim Burchett", Party.REP, true, "2", State.TN));
        incumbentRepository.save(new Incumbent("Charles J. Fleischmann", Party.REP, true, "3", State.TN));
        incumbentRepository.save(new Incumbent("Scott DesJarlais", Party.REP, true, "4", State.TN));
        incumbentRepository.save(new Incumbent("Jim Cooper", Party.DEM, false, "5", State.TN));
        incumbentRepository.save(new Incumbent("John Rose", Party.REP, true, "6", State.TN));
        incumbentRepository.save(new Incumbent("Mark Green", Party.REP, false, "7", State.TN));
        incumbentRepository.save(new Incumbent("David Kustoff", Party.REP, true, "8", State.TN));
        incumbentRepository.save(new Incumbent("Steve Cohen", Party.DEM, true, "9", State.TN));

    }

}
