package com.example.warriors.model;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.DistrictPlanID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import mil.nga.sf.geojson.FeatureCollection;
import org.json.simple.JSONObject;

@Document(collection = "Maps")
public class Map {

    private StateID state;
    private DistrictPlanID districtPlanID;
    private JSONObject boundary;

    public Map() {
    }

    public Map(StateID state, DistrictPlanID districtPlanID, JSONObject boundary) {
        this.state = state;
        this.districtPlanID = districtPlanID;
        this.boundary = boundary;
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

    public JSONObject getBoundary() {
        return this.boundary;
    }

    public void setBoundary(JSONObject boundary) {
        this.boundary = boundary;
    }

    public Map state(StateID state) {
        setState(state);
        return this;
    }

    public Map districtPlanID(DistrictPlanID districtPlanID) {
        setDistrictPlanID(districtPlanID);
        return this;
    }

    public Map boundary(JSONObject boundary) {
        setBoundary(boundary);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", districtPlanID='" + getDistrictPlanID() + "'" +
                ", boundary='" + getBoundary() + "'" +
                "}";
    }

}