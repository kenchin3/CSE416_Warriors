import "./Data.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IncumbentTable from "./IncumbentTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Data({ filter, setFilter, twoZero, twoTwo, random, stateValue }) {
  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <div className="leftData">
        {/* <Accordion>
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Boundaries</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={twoZero}
                  onChange={handleChange}
                  name="twoZero"
                />
              }
              label="2020"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={twoTwo}
                  onChange={handleChange}
                  name="twoTwo"
                />
              }
              label="2022"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={random}
                  onChange={handleChange}
                  name="random"
                />
              }
              label="Random"
            />
          </FormGroup>
        </FormControl>
        <IncumbentTable stateValue={stateValue} />
      </div>
    </>
  );
}

export default Data;
