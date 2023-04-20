package com.example.incumbent;

public class District {
    int geographicSize;
    int population;
    int districtNumber;
    Incumbent incumbent;

    public int getGeographicSize() {
        return this.geographicSize;
    }

    public void setGeographicSize(int geographicSize) {
        this.geographicSize = geographicSize;
    }

    public int getPopulation() {
        return this.population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public int getDistrictNumber() {
        return this.districtNumber;
    }

    public void setDistrictNumber(int districtNumber) {
        this.districtNumber = districtNumber;
    }

    public Incumbent getIncumbent() {
        return this.incumbent;
    }

    public void setIncumbent(Incumbent incumbent) {
        this.incumbent = incumbent;
    }
}
