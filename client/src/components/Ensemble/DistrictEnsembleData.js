import React from "react";

function districtEnsembleData({ district, districtEnsembleData }) {
  return (
    <div>
      {district !== -1 && districtEnsembleData && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Geometric Difference:{" "}
          </span>
          {districtEnsembleData.districts[district]["geo_diff"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Population Difference:{" "}
          </span>
          {districtEnsembleData.districts[district]["pop_diff"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Dem Votes:</span>
          {districtEnsembleData.districts[district]["dem_split"]}
          {}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Rep Votes:</span>
          {districtEnsembleData.districts[district]["rep_split"]}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Safe Seat:</span>
          {districtEnsembleData.districts[district]["safe_seat"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Winning Percentage :
          </span>
          {districtEnsembleData.districts[district].win_party == "rep"
            ? (
                districtEnsembleData.districts[district]["rep_split"] /
                (districtEnsembleData.districts[district]["rep_split"] +
                  districtEnsembleData.districts[district]["dem_split"])
              ).toFixed(3)
            : (
                districtEnsembleData.districts[district]["dem_split"] /
                (districtEnsembleData.districts[district]["rep_split"] +
                  districtEnsembleData.districts[district]["dem_split"])
              ).toFixed(3)}{" "}
          <br />
        </div>
      )}
    </div>
  );
}

export default districtEnsembleData;
