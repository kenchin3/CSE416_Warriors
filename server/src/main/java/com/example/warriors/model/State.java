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
    private List<DistrictEnsemble> districtEnsembles;
    private List<Incumbent> incumbents;
    private List<Map> maps;
    private Ensemble ensemble;

    public State() {
    }

    public State(StateID state, List<District> districts, List<DistrictEnsemble> districtEnsembles,
            List<Incumbent> incumbents, List<Map> maps, Ensemble ensemble) {
        this.state = state;
        this.districts = districts;
        this.districtEnsembles = districtEnsembles;
        this.incumbents = incumbents;
        this.maps = maps;
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

    public List<DistrictEnsemble> getDistrictEnsembles() {
        return this.districtEnsembles;
    }

    public void setDistrictEnsembles(List<DistrictEnsemble> districtEnsembles) {
        this.districtEnsembles = districtEnsembles;
    }

    public List<Incumbent> getIncumbents() {
        return this.incumbents;
    }

    public void setIncumbents(List<Incumbent> incumbents) {
        this.incumbents = incumbents;
    }

    public List<Map> getMaps() {
        return this.maps;
    }

    public void setMaps(List<Map> maps) {
        this.maps = maps;
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

    public State districtEnsembles(List<DistrictEnsemble> districtEnsembles) {
        setDistrictEnsembles(districtEnsembles);
        return this;
    }

    public State incumbents(List<Incumbent> incumbents) {
        setIncumbents(incumbents);
        return this;
    }

    public State maps(List<Map> maps) {
        setMaps(maps);
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
                && Objects.equals(districtEnsembles, state.districtEnsembles)
                && Objects.equals(incumbents, state.incumbents) && Objects.equals(maps, state.maps)
                && Objects.equals(ensemble, state.ensemble);
    }

    @Override
    public int hashCode() {
        return Objects.hash(state, districts, districtEnsembles, incumbents, maps, ensemble);
    }

    @Override
    public String toString() {
        return "{" +
                " state='" + getState() + "'" +
                ", districts='" + getDistricts() + "'" +
                ", districtEnsembles='" + getDistrictEnsembles() + "'" +
                ", incumbents='" + getIncumbents() + "'" +
                ", maps='" + getMaps() + "'" +
                ", ensemble='" + getEnsemble() + "'" +
                "}";
    }

}