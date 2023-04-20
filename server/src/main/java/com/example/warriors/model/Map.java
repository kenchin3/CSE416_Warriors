package com.example.warriors.model;

import java.util.List;
import com.example.warriors.model.State;
import com.example.warriors.model.DistrictPlanID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import mil.nga.sf.geojson.Feature;

@Document(collection = "Maps")
public class Map {

    private List<Feature> features;
    private String type;

    public Map(List<Feature> features, String type) {
        this.features = features;
        this.type = type;
    }

    public List<Feature> getFeatures() {
        return this.features;
    }

    public void setFeatures(List<Feature> features) {
        this.features = features;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "{" +
                " features='" + getFeatures() + "'" +
                ", type='" + getType() + "'" +
                "}";
    }

}