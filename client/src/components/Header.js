import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import "./Header.css";

function Header({}) {
  return (
    <div>
      <Box className="headerContent" bgcolor="#006bb6">
        <span className="fullTitle">
          <span className="title" style={{ color: "#fdb927" }}>
            Incumbent Analysis by the Warriors
          </span>
        </span>
      </Box>
    </div>
  );
}

export default Header;
