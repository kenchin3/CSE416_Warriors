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
    private JSONObject features;

    public Map(StateID state, DistrictPlanID districtPlanID, JSONObject features) {
        this.state = state;
        this.districtPlanID = districtPlanID;
        this.features = features;
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

    public JSONObject getFeatures() {
        return this.features;
    }

    public void setFeatures(JSONObject features) {
        this.features = features;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", districtPlanID='" + getDistrictPlanID() + "'" +
                ", features='" + getFeatures() + "'" +
                "}";
    }

}