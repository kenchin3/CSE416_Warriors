import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Header.css";

function Header({ tabValue, setTabValue, stateValue, setStateValue }) {
  // const [tabValue, setTabValue] = React.useState(0);
  // const [state, setState] = React.useState("");

  // console.log(tabValue);

  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
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
        <span>
          <Tabs
            centered
            className="tabs"
            value={tabValue}
            onChange={handleTabChange}
          >
            <Tab
              label="Ensemble Data"
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
          </Tabs>
        </span>
      </Box>
    </div>
  );
}

export default Header;
