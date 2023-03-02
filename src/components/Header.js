import Box from "@mui/material/Box";
import "./Header.css";

function Header({}) {
  return (
    <div>
      <Box className="headerContent" bgcolor="black">
        {/* <span className="teamName"> 2017 Warriors</span> */}
        <span className="title"> Incumbent Analysis</span>
      </Box>
    </div>
  );
}

export default Header;
