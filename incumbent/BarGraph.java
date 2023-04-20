// Pers == Percentages
// Per == Percent
// Dem = Democratic
// Rep = Republican

import java.util.*;

public class BarGraph {
    List<Integer> repPers;
    List<Integer> demPers;

    public List<Integer> getRepPers() {
        return this.repPers;
    }

    public void setRepPers(List<Integer> repPers) {
        this.repPers = repPers;
    }

    public List<Integer> getDemoPers() {
        return this.demoPers;
    }

    public void setDemoPers(List<Integer> demoPers) {
        this.demoPers = demoPers;
    }

    public ArrayList<Integer> getRepPercenagesWithBoundary(int lower, int hihger){
        ArrayList<Integer> repPersInRange = new ArrayList<Integer>();
        for(int i = 0; i < repPers.size(); i++){
            if(repPers.get(i) >= lower and repPers.get(i) < higher){
                repPersInRange.add(repPers.get(i));
            }
        }
        return repPersInRange;
    }

    public ArrayList<Integer> getdemoPercentagesWithBoundary(int lower, int higher){
        ArrayList<Integer> demPersInRange = new ArrayList<Integer>();
        for(int i = 0; i < demPers.size(); i++){
            if(demPers.get(i) >= lower and demPers.get(i) < higher){
                demPersInRange.add(demPers.get(i));
            }
        }
        return demPersInRange;
    }
}
