package com.example.warriors.model;

import com.example.warriors.model.StateID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Objects;
import org.json.simple.JSONObject;

@Document(collection = "Districts")
public class District {
    private JSONObject data;
    private StateID state;
    private DistrictPlanID districtPlanID;

    public District() {
    }

    public District(JSONObject data, StateID state, DistrictPlanID districtPlanID) {
        this.data = data;
        this.state = state;
        this.districtPlanID = districtPlanID;
    }

    public JSONObject getData() {
        return this.data;
    }

    public void setData(JSONObject data) {
        this.data = data;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public DistrictPlanID getDistrictPlanID() {
        return this.districtPlanID;
    }

    public void setDistrictPlanID(DistrictPlanID districtPlanID) {
        this.districtPlanID = districtPlanID;
    }

    public District data(JSONObject data) {
        setData(data);
        return this;
    }

    public District state(StateID state) {
        setState(state);
        return this;
    }

    public District districtPlanID(DistrictPlanID districtPlanID) {
        setDistrictPlanID(districtPlanID);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof District)) {
            return false;
        }
        District district = (District) o;
        return Objects.equals(data, district.data) && Objects.equals(state, district.state)
                && Objects.equals(districtPlanID, district.districtPlanID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(data, state, districtPlanID);
    }

    @Override
    public String toString() {
        return "{" +
                " data='" + getData() + "'" +
                ", state='" + getState() + "'" +
                ", districtPlanID='" + getDistrictPlanID() + "'" +
                "}";
    }

    // private DistrictPlanID districtPlanID;
    // private StateID state;
    // private String district;
    // private Double population;
    // private Double area;
    // private Double popVar;
    // private Double geoVar;
    // private Double popDiff;
    // private Double geoDiff;

    // public District() {
    // }

    // public District(DistrictPlanID districtPlanID, StateID state, String
    // district, Double population, Double area,
    // Double popVar, Double geoVar, Double popDiff, Double geoDiff) {
    // this.districtPlanID = districtPlanID;
    // this.state = state;
    // this.district = district;
    // this.population = population;
    // this.area = area;
    // this.popVar = popVar;
    // this.geoVar = geoVar;
    // this.popDiff = popDiff;
    // this.geoDiff = geoDiff;
    // }

    // public DistrictPlanID getDistrictPlanID() {
    // return this.districtPlanID;
    // }

    // public void setDistrictPlanID(DistrictPlanID districtPlanID) {
    // this.districtPlanID = districtPlanID;
    // }

    // public StateID getState() {
    // return this.state;
    // }

    // public void setState(StateID state) {
    // this.state = state;
    // }

    // public String getDistrict() {
    // return this.district;
    // }

    // public void setDistrict(String district) {
    // this.district = district;
    // }

    // public Double getPopulation() {
    // return this.population;
    // }

    // public void setPopulation(Double population) {
    // this.population = population;
    // }

    // public Double getArea() {
    // return this.area;
    // }

    // public void setArea(Double area) {
    // this.area = area;
    // }

    // public Double getPopVar() {
    // return this.popVar;
    // }

    // public void setPopVar(Double popVar) {
    // this.popVar = popVar;
    // }

    // public Double getGeoVar() {
    // return this.geoVar;
    // }

    // public void setGeoVar(Double geoVar) {
    // this.geoVar = geoVar;
    // }

    // public Double getPopDiff() {
    // return this.popDiff;
    // }

    // public void setPopDiff(Double popDiff) {
    // this.popDiff = popDiff;
    // }

    // public Double getGeoDiff() {
    // return this.geoDiff;
    // }

    // public void setGeoDiff(Double geoDiff) {
    // this.geoDiff = geoDiff;
    // }

    // public District districtPlanID(DistrictPlanID districtPlanID) {
    // setDistrictPlanID(districtPlanID);
    // return this;
    // }

    // public District state(StateID state) {
    // setState(state);
    // return this;
    // }

    // public District district(String district) {
    // setDistrict(district);
    // return this;
    // }

    // public District population(Double population) {
    // setPopulation(population);
    // return this;
    // }

    // public District area(Double area) {
    // setArea(area);
    // return this;
    // }

    // public District popVar(Double popVar) {
    // setPopVar(popVar);
    // return this;
    // }

    // public District geoVar(Double geoVar) {
    // setGeoVar(geoVar);
    // return this;
    // }

    // public District popDiff(Double popDiff) {
    // setPopDiff(popDiff);
    // return this;
    // }

    // public District geoDiff(Double geoDiff) {
    // setGeoDiff(geoDiff);
    // return this;
    // }

    // @Override
    // public boolean equals(Object o) {
    // if (o == this)
    // return true;
    // if (!(o instanceof District)) {
    // return false;
    // }
    // District district = (District) o;
    // return Objects.equals(districtPlanID, district.districtPlanID) &&
    // Objects.equals(state, district.state)
    // && Objects.equals(district, district.district) && Objects.equals(population,
    // district.population)
    // && Objects.equals(area, district.area) && Objects.equals(popVar,
    // district.popVar)
    // && Objects.equals(geoVar, district.geoVar) && Objects.equals(popDiff,
    // district.popDiff)
    // && Objects.equals(geoDiff, district.geoDiff);
    // }

    // @Override
    // public int hashCode() {
    // return Objects.hash(districtPlanID, state, district, population, area,
    // popVar, geoVar, popDiff, geoDiff);
    // }

    // @Override
    // public String toString() {
    // return "{" +
    // " districtPlanID='" + getDistrictPlanID() + "'" +
    // ", state='" + getState() + "'" +
    // ", district='" + getDistrict() + "'" +
    // ", population='" + getPopulation() + "'" +
    // ", area='" + getArea() + "'" +
    // ", popVar='" + getPopVar() + "'" +
    // ", geoVar='" + getGeoVar() + "'" +
    // ", popDiff='" + getPopDiff() + "'" +
    // ", geoDiff='" + getGeoDiff() + "'" +
    // "}";
    // }

}