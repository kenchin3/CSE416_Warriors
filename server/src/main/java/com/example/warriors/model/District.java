package com.example.warriors.model;

import com.example.warriors.model.State;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Districts")
public class District {

    private DistrictPlanID districtPlanID;
    private State state;
    private String district;
    private Double population;
    private Double area;

    public District(DistrictPlanID districtPlanID, State state, String district, Double population, Double area) {
        this.districtPlanID = districtPlanID;
        this.state = state;
        this.district = district;
        this.population = population;
        this.area = area;
    }

    public DistrictPlanID getDistrictPlanID() {
        return this.districtPlanID;
    }

    public void setDistrictPlanID(DistrictPlanID districtPlanID) {
        this.districtPlanID = districtPlanID;
    }

    public State getState() {
        return this.state;
    }

    public void setState(State state) {
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

    @Override
    public String toString() {
        return "{" +
                " districtPlanID='" + getDistrictPlanID() + "'" +
                ", state='" + getState() + "'" +
                ", district='" + getDistrict() + "'" +
                ", population='" + getPopulation() + "'" +
                ", area='" + getArea() + "'" +
                "}";
    }

}