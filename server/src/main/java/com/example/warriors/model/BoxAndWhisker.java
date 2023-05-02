package com.example.warriors.model;

import com.example.warriors.model.StateID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Objects;

@Document(collection = "BoxAndWhisker")
public class BoxAndWhisker {

    private StateID state;
    private String type;
    private Double[][] data;
    private Double[] dots22;
    // private Double q1;
    // private Double q3;
    // private Double q2;
    // private Double max;
    // private Double min;

    public BoxAndWhisker() {
    }

    public BoxAndWhisker(StateID state, String type, Double[][] data, Double[] dots22) {
        this.state = state;
        this.type = type;
        this.data = data;
        this.dots22 = dots22;
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

    public Double[] getDots22() {
        return this.dots22;
    }

    public void setDots22(Double[] dots22) {
        this.dots22 = dots22;
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

    public BoxAndWhisker dots22(Double[] dots22) {
        setDots22(dots22);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof BoxAndWhisker)) {
            return false;
        }
        BoxAndWhisker boxAndWhisker = (BoxAndWhisker) o;
        return Objects.equals(state, boxAndWhisker.state) && Objects.equals(type, boxAndWhisker.type)
                && Objects.equals(data, boxAndWhisker.data) && Objects.equals(dots22, boxAndWhisker.dots22);
    }

    @Override
    public int hashCode() {
        return Objects.hash(state, type, data, dots22);
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", type='" + getType() + "'" +
                ", data='" + getData() + "'" +
                ", dots22='" + getDots22() + "'" +
                "}";
    }

}