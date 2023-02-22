import "./Data.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import IncumbentTable from "./IncumbentTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Data({ filter, setFilter, twoZero, twoTwo, random, stateValue }) {
  const handleChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value);
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
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Select Boundaries</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="20"
                name="radio-buttons-group"
                row={true}
                onChange={handleChange}
              >
                <FormControlLabel value="2020" control={<Radio />} label="2020" />
                <FormControlLabel value="2022" control={<Radio />} label="2022" />
                <FormControlLabel value="Random" control={<Radio />} label="Random" />
              </RadioGroup>
          </FormControl>
        <IncumbentTable stateValue={stateValue} />
      </div>
    </>
  );
}

export default Data;
