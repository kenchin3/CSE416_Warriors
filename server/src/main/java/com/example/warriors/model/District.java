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

    public District(DistrictPlanID districtPlanID, StateID state, String district, Double population, Double area) {
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