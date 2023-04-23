package com.example.warriors.model;

import com.example.warriors.model.StateID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BoxAndWhisker")
public class BoxAndWhisker {

    private StateID state;
    private String type;
    private Double[][] data;
    // private Double q1;
    // private Double q3;
    // private Double q2;
    // private Double max;
    // private Double min;

    public BoxAndWhisker(StateID state, String type, Double[][] data) {
        this.state = state;
        this.type = type;
        this.data = data;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double[][] getData() {
        return this.data;
    }

    public void setData(Double[][] data) {
        this.data = data;
    }

    public BoxAndWhisker state(StateID state) {
        setState(state);
        return this;
    }

    public BoxAndWhisker type(String type) {
        setType(type);
        return this;
    }

    public BoxAndWhisker data(Double[][] data) {
        setData(data);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", type='" + getType() + "'" +
                ", data='" + getData() + "'" +
                "}";
    }

}