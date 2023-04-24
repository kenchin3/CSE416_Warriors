package com.example.model;
import org.springframework.data.annotation.Id;

public class Incumbent{

    @Id
    String name;
    String party;
    String electionResult;


    public Incumbent(String name, String party, String electionResult) {
        this.name = name;
        this.party = party;
        this.electionResult = electionResult;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getParty() {
        return this.party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public String getElectionResult() {
        return this.electionResult;
    }

    public void setElectionResult(String electionResult) {
        this.electionResult = electionResult;
    }

    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            ", party='" + getParty() + "'" +
            ", electionResult='" + getElectionResult() + "'" +
            "}";
    }
   
}

