import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import "./Header.css";

function Header({}) {
  return (
    <div>
      <Box className="headerContent" bgcolor="#949494">
        <span className="fullTitle">
          <span className="title"> Incumbent Analysis by </span>
          <span className="title" style={{ color: "yellow" }}>
            the Warriors
          </span>
        </span>
      </Box>
    </div>
  );
}

export default Header;
