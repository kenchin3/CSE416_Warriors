package com.example.warriors.model;

import com.example.warriors.model.StateID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "BoxAndWhisker")
public class BoxAndWhisker {

    private StateID state;
    private String type;
    private Double q1;
    private Double q3;
    private Double q2;
    private Double max;
    private Double min;

    public BoxAndWhisker(StateID state, String type, Double q1, Double q3, Double q2, Double max, Double min) {
        this.state = state;
        this.type = type;
        this.q1 = q1;
        this.q3 = q3;
        this.q2 = q2;
        this.max = max;
        this.min = min;
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

    public Double getQ1() {
        return this.q1;
    }

    public void setQ1(Double q1) {
        this.q1 = q1;
    }

    public Double getQ3() {
        return this.q3;
    }

    public void setQ3(Double q3) {
        this.q3 = q3;
    }

    public Double getQ2() {
        return this.q2;
    }

    public void setQ2(Double q2) {
        this.q2 = q2;
    }

    public Double getMax() {
        return this.max;
    }

    public void setMax(Double max) {
        this.max = max;
    }

    public Double getMin() {
        return this.min;
    }

    public void setMin(Double min) {
        this.min = min;
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", type='" + getType() + "'" +
                ", q1='" + getQ1() + "'" +
                ", q3='" + getQ3() + "'" +
                ", q2='" + getQ2() + "'" +
                ", max='" + getMax() + "'" +
                ", min='" + getMin() + "'" +
                "}";
    }

}