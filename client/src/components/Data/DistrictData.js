import React from "react";
import "./DistrictData.css";

function DistrictData({
  district,
  setDistrict,
  stateValue,
  incumbentTableData,
}) {
  const [districtData, setdistrictData] = React.useState();

  return (
    <div className="districtDataLocation">
      {district !== -1 && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {incumbentTableData[district]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Winner: </span>
          {incumbentTableData[district]["name"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Population:{" "}
          </span>
          {} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:{" "}
          </span>
          {incumbentTableData[district]["pop"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Geographic Area:{" "}
          </span>{" "}
          {} <br />
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
