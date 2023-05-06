import React from "react";

function DistrictData({
  district,
  setDistrict,
  stateValue,
  incumbentTableData,
}) {
  const [districtData, setdistrictData] = React.useState();

  return (
    <div>
      {district !== -1 && incumbentTableData && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {incumbentTableData[district]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Winner: </span>
          {incumbentTableData[district]["name"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Population Difference:
          </span>
          {
           }{incumbentTableData[district]["popDiff"]} 
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:{" "}
          </span>
          {incumbentTableData[district]["pop"]} <br/>
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Geographic Difference:
          </span>{incumbentTableData[district]["geoDiff"].toFixed(3)}
          {
           }{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Geographic Area:{" "}
          </span>{" "}
          {incumbentTableData[district]["area"]}
        </div>
      )}
    </div>
  );
}

export default DistrictData;
