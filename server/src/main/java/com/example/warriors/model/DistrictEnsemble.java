package com.example.warriors.model;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import com.example.warriors.model.StateID;
import com.example.warriors.model.DistrictPlanID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Objects;

@Document(collection = "DistrictEnsemble")
public class DistrictEnsemble {
    private JSONObject data;
    private StateID state;
    private DistrictPlanID districtPlanID;

    public DistrictEnsemble() {
    }

    public DistrictEnsemble(JSONObject data, StateID state, DistrictPlanID districtPlanID) {
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

    public DistrictEnsemble data(JSONObject data) {
        setData(data);
        return this;
    }

    public DistrictEnsemble state(StateID state) {
        setState(state);
        return this;
    }

    public DistrictEnsemble districtPlanID(DistrictPlanID districtPlanID) {
        setDistrictPlanID(districtPlanID);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof DistrictEnsemble)) {
            return false;
        }
        DistrictEnsemble districtEnsemble = (DistrictEnsemble) o;
        return Objects.equals(data, districtEnsemble.data) && Objects.equals(state, districtEnsemble.state)
                && Objects.equals(districtPlanID, districtEnsemble.districtPlanID);
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

}