package com.example.warriors.model;

import com.example.warriors.model.StateID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Districts")
public class District {

    private DistrictPlanID districtPlanID;
    private StateID state;
    private String district;
    private Double population;
    private Double area;
    private Double popVar;
    private Double geoVar;

    public District() {
    }

    public District(DistrictPlanID districtPlanID, StateID state, String district, Double population, Double area,
            Double popVar, Double geoVar) {
        this.districtPlanID = districtPlanID;
        this.state = state;
        this.district = district;
        this.population = population;
        this.area = area;
        this.popVar = popVar;
        this.geoVar = geoVar;
    }

    public DistrictPlanID getDistrictPlanID() {
        return this.districtPlanID;
    }

    public void setDistrictPlanID(DistrictPlanID districtPlanID) {
        this.districtPlanID = districtPlanID;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public String getDistrict() {
        return this.district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Double getPopulation() {
        return this.population;
    }

    public void setPopulation(Double population) {
        this.population = population;
    }

    public Double getArea() {
        return this.area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Double getPopVar() {
        return this.popVar;
    }

    public void setPopVar(Double popVar) {
        this.popVar = popVar;
    }

    public Double getGeoVar() {
        return this.geoVar;
    }

    public void setGeoVar(Double geoVar) {
        this.geoVar = geoVar;
    }

    public District districtPlanID(DistrictPlanID districtPlanID) {
        setDistrictPlanID(districtPlanID);
        return this;
    }

    public District state(StateID state) {
        setState(state);
        return this;
    }

    public District district(String district) {
        setDistrict(district);
        return this;
    }

    public District population(Double population) {
        setPopulation(population);
        return this;
    }

    public District area(Double area) {
        setArea(area);
        return this;
    }

    public District popVar(Double popVar) {
        setPopVar(popVar);
        return this;
    }

    public District geoVar(Double geoVar) {
        setGeoVar(geoVar);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
                " districtPlanID='" + getDistrictPlanID() + "'" +
                ", state='" + getState() + "'" +
                ", district='" + getDistrict() + "'" +
                ", population='" + getPopulation() + "'" +
                ", area='" + getArea() + "'" +
                ", popVar='" + getPopVar() + "'" +
                ", geoVar='" + getGeoVar() + "'" +
                "}";
    }

}