// package com.example.incumbent;

import java.util.*;

public class State{
    Ensemble ensemble;
    List <DistrictPlan> districtPlans;
    String name;
    int numOfDistricts;
    BoxAndWhisker BaW;

    public Ensemble getEnsemble() {
        return this.e;
    }

    public void setE(Ensemble ensemble) {
        this.ensemble = ensemble;
    }

    public List<DistrictPlan> getDistrictPlans() {
        return this.districtPlans;
    }

    public void setDistrictPlans(List<DistrictPlan> districtPlans) {
        this.districtPlans = districtPlans;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumOfDistricts() {
        return this.numOfDistricts;
    }

    public void setNumOfDistricts(int numOfDistricts) {
        this.numOfDistricts = numOfDistricts;
    }

    public BoxAndWhisker getBaW() {
        return this.BaW;
    }

    public void setBaW(BoxAndWhisker BaW) {
        this.BaW = BaW;
    }
}