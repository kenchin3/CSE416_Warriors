import "./Data.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import IncumbentTable from "./IncumbentTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

function Data({ filter, setFilter, twoZero, twoTwo, random, stateValue, district, setDistrict }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="leftData">
        <Paper className="paper" elevation={4}>
          <Grid container spacing={0}>
            <Grid className="paperHeader" item xs={6} md={4.5}>
              Select Boundaries:
            </Grid>
            <Grid className="paperOptions" item xs={6} md={6}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="20"
                  name="radio-buttons-group"
                  row={true}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="2020"
                    control={<Radio />}
                    label="2020"
                  />
                  <FormControlLabel
                    value="2022"
                    control={<Radio />}
                    label="2022"
                  />
                  <FormControlLabel
                    value="Random"
                    control={<Radio />}
                    label="Random"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Incumbent Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <IncumbentTable stateValue={stateValue} />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Summary Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Number of Districts:</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Data;
