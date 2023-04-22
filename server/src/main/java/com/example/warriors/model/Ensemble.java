package com.example.warriors.model;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.BoxAndWhisker;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Ensemble")
public class Ensemble {
    @Id
    private StateID state;
    private List<BoxAndWhisker> boxAndWhiskers;
    private Double avgGeoVar;
    private Double avgPopVar;
    private int incumbentWin;

    public Ensemble(StateID state, List<BoxAndWhisker> boxAndWhiskers, Double avgGeoVar, Double avgPopVar,
            int incumbentWin) {
        this.state = state;
        this.boxAndWhiskers = boxAndWhiskers;
        this.avgGeoVar = avgGeoVar;
        this.avgPopVar = avgPopVar;
        this.incumbentWin = incumbentWin;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public List<BoxAndWhisker> getBoxAndWhiskers() {
        return this.boxAndWhiskers;
    }

    public void setBoxAndWhiskers(List<BoxAndWhisker> boxAndWhiskers) {
        this.boxAndWhiskers = boxAndWhiskers;
    }

    public Double getAvgGeoVar() {
        return this.avgGeoVar;
    }

    public void setAvgGeoVar(Double avgGeoVar) {
        this.avgGeoVar = avgGeoVar;
    }

    public Double getAvgPopVar() {
        return this.avgPopVar;
    }

    public void setAvgPopVar(Double avgPopVar) {
        this.avgPopVar = avgPopVar;
    }

    public int getIncumbentWin() {
        return this.incumbentWin;
    }

    public void setIncumbentWin(int incumbentWin) {
        this.incumbentWin = incumbentWin;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", boxAndWhiskers='" + getBoxAndWhiskers() + "'" +
                ", avgGeoVar='" + getAvgGeoVar() + "'" +
                ", avgPopVar='" + getAvgPopVar() + "'" +
                ", incumbentWin='" + getIncumbentWin() + "'" +
                "}";
    }

}