package com.example.warriors.model;

import com.example.warriors.model.State;
import com.example.warriors.model.Party;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Incumbents")
public class Incumbent {
    @Id
    private String name;
    private Party party;
    private Boolean electionResult;
    private String district;
    private State state;

    public Incumbent(String name, Party party, Boolean electionResult, String district, State state) {
        this.name = name;
        this.party = party;
        this.electionResult = electionResult;
        this.district = district;
        this.state = state;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Party getParty() {
        return this.party;
    }

    public void setParty(Party party) {
        this.party = party;
    }

    public Boolean isElectionResult() {
        return this.electionResult;
    }

    public Boolean getElectionResult() {
        return this.electionResult;
    }

    public void setElectionResult(Boolean electionResult) {
        this.electionResult = electionResult;
    }

    public String getDistrict() {
        return this.district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public State getState() {
        return this.state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "{" +
                " name='" + getName() + "'" +
                ", party='" + getParty() + "'" +
                ", electionResult='" + isElectionResult() + "'" +
                ", district='" + getDistrict() + "'" +
                ", state='" + getState() + "'" +
                "}";
    }

}
