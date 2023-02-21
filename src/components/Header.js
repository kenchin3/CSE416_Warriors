import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import "./Header.css";

function Header({ tabValue, setTabValue, stateValue, setStateValue }) {
  // const [tabValue, setTabValue] = React.useState(0);
  // const [state, setState] = React.useState("");

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const handleStateChange = (event) => {
    setStateValue(event.target.value);
  };

  const tabStyles = {
    selectedTab: {
      color: "",
    },
    nonSelectedTab: {
      color: "#D3D3D3",
    },
  };

  return (
    <div>
      <Box className="headerContent" bgcolor="black">
        <FormControl className="form" size="small">
          <InputLabel id="inputLabel">
            {" "}
            {stateValue === "" ? "State" : ""}
          </InputLabel>
          <Select
            labelId="inputLabel"
            className="select"
            value={stateValue}
            label={stateValue === "" ? "State" : ""}
            onChange={handleStateChange}
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiSvgIcon-root ": {
                fill: "white",
              },
              "&:hover .MuiSvgIcon-root ": {
                fill: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "rgba(228, 219, 233, 0.25)",
              },
            }}
          >
            <MenuItem value={"pa"}>Pennsylvania</MenuItem>
            <MenuItem value={"tn"}>Tennessee</MenuItem>
            <MenuItem value={"ok"}>Oklahoma</MenuItem>
          </Select>
        </FormControl>

        <span>
          <Tabs
            centered
            className="tabs"
            value={tabValue}
            onChange={handleTabChange}
          >
            <Tab
              label="Cumulative Data"
              style={
                tabValue === 0
                  ? tabStyles.selectedTab
                  : tabStyles.nonSelectedTab
              }
            />
            <Tab
              label="States"
              style={
                tabValue === 1
                  ? tabStyles.selectedTab
                  : tabStyles.nonSelectedTab
              }
            />
            <Tab
              label="Box and Whisker"
              style={
                tabValue === 2
                  ? tabStyles.selectedTab
                  : tabStyles.nonSelectedTab
              }
            />
          </Tabs>
        </span>
      </Box>

      {tabValue === 0 && <div> data </div>}
      {tabValue === 1 && <div> States </div>}
      {tabValue === 2 && <div> Box and Whisker </div>}
    </div>
  );
}

export default Header;
