import React from "react";
import axios from "axios";

function DistrictData({ district, setDistrict, stateValue }) {
  const [districtData, setdistrictData] = React.useState();

  // React.useEffect(() => {
  //   axios.get("http://localhost:8080/states/" + stateValue).then((res) => {
  //     setdistrictData(res.data);
  //     console.log(JSON.stringify(res.data));
  //   });
  // }, []);

  return (
    <div className="districtDataLocation">
      {district !== -1 && (
        <div className="districtDataFont">
          <span style={{ fontWeight: 550, fontSize: 15 }}> District: </span>
          {districtData[district - 1]["district"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}> Winner: </span>
          {districtData[district - 1]["winner"]} <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Population:{" "}
          </span>
          {districtData[district - 1]["pop2020"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Population:{" "}
          </span>
          {districtData[district - 1]["pop2022"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2020 Geographic Area:{" "}
          </span>{" "}
          {districtData[district - 1]["area2020"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          <br />
          <span style={{ fontWeight: 550, fontSize: 15 }}>
            {" "}
            2022 Geographic Area:{" "}
          </span>{" "}
          {districtData[district - 1]["area2022"]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      )}
    </div>
  );
}

export default DistrictData;
