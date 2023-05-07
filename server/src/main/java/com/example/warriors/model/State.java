package com.example.warriors.model;

import java.util.List;
import com.example.warriors.model.StateID;
import com.example.warriors.model.District;
import com.example.warriors.model.DistrictEnsemble;
import com.example.warriors.model.Map;
import com.example.warriors.model.Incumbent;
import com.example.warriors.model.BoxAndWhisker;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Objects;

@Document(collection = "State")
public class State {
    @Id
    private StateID state;
    private List<District> districts;
    // private List<DistrictEnsemble> districtsYR22;
    // private List<DistrictEnsemble> districtsRandom1;
    // private List<DistrictEnsemble> districtsRandom2;
    // private List<DistrictEnsemble> districtsRandom3;
    private DistrictEnsemble districtsYR22;
    private DistrictEnsemble districtsRandom1;
    private DistrictEnsemble districtsRandom2;
    private DistrictEnsemble districtsRandom3;
    // private List<Incumbent> incumbents;
    // private List<Map> maps;
    private Ensemble ensemble;

    public State() {
    }

    public State(StateID state, List<District> districts, DistrictEnsemble districtsYR22,
            DistrictEnsemble districtsRandom1, DistrictEnsemble districtsRandom2, DistrictEnsemble districtsRandom3,
            Ensemble ensemble) {
        this.state = state;
        this.districts = districts;
        this.districtsYR22 = districtsYR22;
        this.districtsRandom1 = districtsRandom1;
        this.districtsRandom2 = districtsRandom2;
        this.districtsRandom3 = districtsRandom3;
        this.ensemble = ensemble;
    }

    public StateID getState() {
        return this.state;
    }

    public void setState(StateID state) {
        this.state = state;
    }

    public List<District> getDistricts() {
        return this.districts;
    }

    public void setDistricts(List<District> districts) {
        this.districts = districts;
    }

    public DistrictEnsemble getDistrictsYR22() {
        return this.districtsYR22;
    }

    public void setDistrictsYR22(DistrictEnsemble districtsYR22) {
        this.districtsYR22 = districtsYR22;
    }

    public DistrictEnsemble getDistrictsRandom1() {
        return this.districtsRandom1;
    }

    public void setDistrictsRandom1(DistrictEnsemble districtsRandom1) {
        this.districtsRandom1 = districtsRandom1;
    }

    public DistrictEnsemble getDistrictsRandom2() {
        return this.districtsRandom2;
    }

    public void setDistrictsRandom2(DistrictEnsemble districtsRandom2) {
        this.districtsRandom2 = districtsRandom2;
    }

    public DistrictEnsemble getDistrictsRandom3() {
        return this.districtsRandom3;
    }

    public void setDistrictsRandom3(DistrictEnsemble districtsRandom3) {
        this.districtsRandom3 = districtsRandom3;
    }

    public Ensemble getEnsemble() {
        return this.ensemble;
    }

    public void setEnsemble(Ensemble ensemble) {
        this.ensemble = ensemble;
    }

    public State state(StateID state) {
        setState(state);
        return this;
    }

    public State districts(List<District> districts) {
        setDistricts(districts);
        return this;
    }

    public State districtsYR22(DistrictEnsemble districtsYR22) {
        setDistrictsYR22(districtsYR22);
        return this;
    }

    public State districtsRandom1(DistrictEnsemble districtsRandom1) {
        setDistrictsRandom1(districtsRandom1);
        return this;
    }

    public State districtsRandom2(DistrictEnsemble districtsRandom2) {
        setDistrictsRandom2(districtsRandom2);
        return this;
    }

    public State districtsRandom3(DistrictEnsemble districtsRandom3) {
        setDistrictsRandom3(districtsRandom3);
        return this;
    }

    public State ensemble(Ensemble ensemble) {
        setEnsemble(ensemble);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof State)) {
            return false;
        }
        State state = (State) o;
        return Objects.equals(state, state.state) && Objects.equals(districts, state.districts)
                && Objects.equals(districtsYR22, state.districtsYR22)
                && Objects.equals(districtsRandom1, state.districtsRandom1)
                && Objects.equals(districtsRandom2, state.districtsRandom2)
                && Objects.equals(districtsRandom3, state.districtsRandom3) && Objects.equals(ensemble, state.ensemble);
    }

    @Override
    public int hashCode() {
        return Objects.hash(state, districts, districtsYR22, districtsRandom1, districtsRandom2, districtsRandom3,
                ensemble);
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", districts='" + getDistricts() + "'" +
                ", districtsYR22='" + getDistrictsYR22() + "'" +
                ", districtsRandom1='" + getDistrictsRandom1() + "'" +
                ", districtsRandom2='" + getDistrictsRandom2() + "'" +
                ", districtsRandom3='" + getDistrictsRandom3() + "'" +
                ", ensemble='" + getEnsemble() + "'" +
                "}";
    }

}