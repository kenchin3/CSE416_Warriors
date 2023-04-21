package com.example.warriors.model;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.District;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.BoxAndWhisker;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Ensemble")
public class State {
    private StateID state;
    private List<District> districts;
    private List<Incumbent> incumbents;
    private Ensemble ensemble;

    public State(StateID state, List<District> districts, List<Incumbent> incumbents, Ensemble ensemble) {
        this.state = state;
        this.districts = districts;
        this.incumbents = incumbents;
        this.ensemble = ensemble;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public List<District> getDistricts() {
        return this.districts;
    }

    public void setDistricts(List<District> districts) {
        this.districts = districts;
    }

    public List<Incumbent> getIncumbents() {
        return this.incumbents;
    }

    public void setIncumbents(List<Incumbent> incumbents) {
        this.incumbents = incumbents;
    }

    public Ensemble getEnsemble() {
        return this.ensemble;
    }

    public void setEnsemble(Ensemble ensemble) {
        this.ensemble = ensemble;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", districts='" + getDistricts() + "'" +
                ", incumbents='" + getIncumbents() + "'" +
                ", ensemble='" + getEnsemble() + "'" +
                "}";
    }

}