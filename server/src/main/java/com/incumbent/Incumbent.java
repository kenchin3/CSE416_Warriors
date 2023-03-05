package com.example.incumbent;

public class Incumbent{
    Integer district;
    String name;
    Boolean win;
    String party;
    Double geoVar;
    Double popVar;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean isWin() {
        return this.win;
    }

    public Boolean getWin() {
        return this.win;
    }

    public void setWin(Boolean win) {
        this.win = win;
    }

    public String getParty() {
        return this.party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public Double getGeoVar() {
        return this.geoVar;
    }

    public void setGeoVar(Double geoVar) {
        this.geoVar = geoVar;
    }

    public Double getPopVar() {
        return this.popVar;
    }

    public void setPopVar(Double popVar) {
        this.popVar = popVar;
    }

    public Incumbent(Integer district, String name, Boolean win, String party, Double geoVar, Double popVar) {
        super();
        this.district = district;
        this.name = name;
        this.win = win;
        this.party = party;
        this.geoVar = geoVar;
        this.popVar = popVar;
    }

    public Integer getDistrict() {
        return district;
    }

    public void setDistrict(Integer district){
        this.district = district;
    }
    

}