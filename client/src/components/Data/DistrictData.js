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
      {district !== -1 && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {incumbentTableData[district]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Winner: </span>
          {incumbentTableData[district]["name"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            Population Difference:
          </span>
<<<<<<< HEAD
          {
           }{incumbentTableData[district]["popDiff"]} 
          <br />
=======
          {} <br />
>>>>>>> 05c483bd08d1c85a0a45b234c93a09cc163d31c5
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:{" "}
          </span>
          {incumbentTableData[district]["pop"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
<<<<<<< HEAD
            Geographic Difference:
          </span>{incumbentTableData[district]["geoDiff"].toFixed(3)}
          {
           }{" "}
          <br />
=======
            2020 Geographic Area:{" "}
          </span>{" "}
          {} <br />
>>>>>>> 05c483bd08d1c85a0a45b234c93a09cc163d31c5
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
