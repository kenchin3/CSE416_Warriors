import java.util.*;

public class DistrictPlan {
    int year;
    List<District> districts;
    String state;
    enum numPartyTypes{
        numDemIncumbent,
        numRepIncumbent,
        numOpenIncumbent
    };

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public List<District> getDistricts() {
        return this.districts;
    }

    public void getDistrictByNumber(int districtNum){
        return this.districts.get(districtNum);
    }

    public void setDistricts(List<District> districts) {
        this.districts = districts;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getnumRepIncumbent() {
        return this.numRepIncumbent;
    }
    
    public void setnumRepIncumbent(int numRepIncumbent) {
        this.numRepIncumbent = numRepIncumbent;
    }

    public int getnumDemIncumbent() {
        return this.numDemIncumbent;
    }
    
    public void setnumDemIncumbent(int numDemIncumbent) {
        this.numDemIncumbent = numDemIncumbent;
    }

    public int getnumOpenIncumbent() {
        return this.numOpenIncumbent;
    }
    
    public void setnumOpenIncumbent(int numOpenIncumbent) {
        this.numOpenIncumbent = numOpenIncumbent;
    }
}