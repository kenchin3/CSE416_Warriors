package com.example.incumbent;

public class District {
    Integer district;
    String winner;
    Double pop2020;
    Double pop2022;
    Double area2020;
    Double area2022;

    public District(Integer district, String winner, Integer pop2020, Integer pop2022, Double area2020,
            Double area2022) {
        this.district = district;
        this.winner = winner;
        this.pop2020 = (double) pop2020;
        this.pop2022 = (double) pop2022;
        this.area2020 = (double) area2020;
        this.area2022 = (double) area2022;
    }

    public Integer getDistrict() {
        return this.district;
    }

    public void setDistrict(Integer district) {
        this.district = district;
    }

    public String getWinner() {
        return this.winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public Double getPop2020() {
        return this.pop2020;
    }

    public void setPop2020(Double pop2020) {
        this.pop2020 = pop2020;
    }

    public Double getPop2022() {
        return this.pop2022;
    }

    public void setPop2022(Double pop2022) {
        this.pop2022 = pop2022;
    }

    public Double getArea2020() {
        return this.area2020;
    }

    public void setArea2020(Double area2020) {
        this.area2020 = area2020;
    }

    public Double getArea2022() {
        return this.area2022;
    }

    public void setArea2022(Double area2022) {
        this.area2022 = area2022;
    }

}