import React from "react";
import DistrictPlanSummaryTable from "./DistrictPlanSummaryTable";
import DistrictEnsembleData from "./DistrictEnsembleData";
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

      {districtPlan == 1 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random1Data}
          random1Data={random1Data}
          random2Data={random2Data}
          random3Data={random3Data}
          districtPlan={districtPlan}
        />
      )}
      {districtPlan == 2 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random2Data}
          random1Data={random1Data}
          random2Data={random2Data}
          random3Data={random3Data}
          districtPlan={districtPlan}
        />
      )}
      {districtPlan == 3 && (
        <DistrictEnsembleData
          district={district}
          districtEnsembleData={random3Data}
          random1Data={random1Data}
          random2Data={random2Data}
          random3Data={random3Data}
          districtPlan={districtPlan}
        />
      )}
    </>
  );
}

export default DistrictPlanSummary;
