import React from "react";
import DistrictPlanSummaryTable from "./DistrictPlanSummaryTable";
import DistrictEnsembleData from "./DistrictEnsembleData";
import "./DistrictPlanSummary.css";
function DistrictPlanSummary({
  district,
  setDistrict,
  stateValue,
  districtPlan,
  random1Data,
  random2Data,
  random3Data,
}) {
  const [currData, setCurrData] = React.useState();

  return (
    <>
      <div className="districtEnsembleDataFont">
        <span
          style={{ fontWeight: 550, fontSize: 13, fontFamily: "Helvetica" }}
        >
          Number of Districts:{" "}
        </span>
        {random1Data && random2Data && random3Data
          ? districtPlan == 1
            ? random1Data.districts.length
            : districtPlan == 2
            ? random2Data.districts.length
            : random3Data.districts.length
          : 0}
        <br />
        <span
          style={{ fontWeight: 550, fontSize: 13, fontFamily: "Helvetica" }}
        >
          Avg Geo Variance:{" "}
        </span>
        {random1Data && random2Data && random3Data
          ? districtPlan == 1
            ? random1Data.avg_geo_diff
            : districtPlan == 2
            ? random2Data.avg_geo_diff
            : random3Data.avg_geo_diff
          : 0}
        <br />
        <span
          style={{ fontWeight: 550, fontSize: 13, fontFamily: "Helvetica" }}
        >
          Avg Pop Variance:{" "}
        </span>
        {random1Data && random2Data && random3Data
          ? districtPlan == 1
            ? random1Data.avg_pop_diff
            : districtPlan == 2
            ? random2Data.avg_pop_diff
            : random3Data.avg_pop_diff
          : 0}
        <br />
        <span
          style={{ fontWeight: 550, fontSize: 13, fontFamily: "Helvetica" }}
        >
          Total Variance:{" "}
        </span>
        {random1Data && random2Data && random3Data
          ? districtPlan == 1
            ? random1Data.total_var
            : districtPlan == 2
            ? random2Data.total_var
            : random3Data.total_var
          : 0}
      </div>
      {districtPlan == 1 && (
        <DistrictPlanSummaryTable
          district={district}
          currData={random1Data}
          setDistrict={setDistrict}
        ></DistrictPlanSummaryTable>
      )}
      {districtPlan == 2 && (
        <DistrictPlanSummaryTable
          district={district}
          currData={random2Data}
          setDistrict={setDistrict}
        ></DistrictPlanSummaryTable>
      )}
      {districtPlan == 3 && (
        <DistrictPlanSummaryTable
          district={district}
          currData={random3Data}
          setDistrict={setDistrict}
        ></DistrictPlanSummaryTable>
      )}
      <span style={{ color: "white" }}> hi</span>
      {districtPlan == 1 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random1Data}
        />
      )}
      {districtPlan == 2 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random2Data}
        />
      )}
      {districtPlan == 3 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random3Data}
        />
      )}
    </>
  );
}

export default DistrictPlanSummary;
