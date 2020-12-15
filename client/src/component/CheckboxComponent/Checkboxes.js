import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Card, Grid, Paper  } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import pink from '@material-ui/core/colors/pink';
import theme from '../../theme';
import API from '../../utils/API';

const MoodCheckbox = withStyles({
  root: {
    color: pink[100],
    '&$checked': {
      color: pink[100],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function Checkboxes() {
  const [checked, state, setState, setMood] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const [formObject, setFormObject] = useState({
    angry: '',
    anxious: '',
    disgusted: '',
    depressed: '',
    happy: '',
    fearful: '',
    neautral: '',
    sad: '',
  })

  /*

// Load all entries and store them with setEntries
useEffect(() => {
loadMood()
}, [{}])
// Loads all entries and sets them to entries
function loadMood() {
  API.getMood()
    .then(res => 
      setMood(res.data)
    )
    .catch(err => console.log(err));
  };
  */

function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

function handleFormSubmit(event) {
  event.preventDefault();
      API.saveMood({
      checkAng: formObject.angry,
      checkAnx: formObject.anxious,
      checkDis: formObject.disgusted,
      checkDep: formObject.depressed,
      checkHap: formObject.happy,
      checkfear: formObject.fearful,
      checkNeut: formObject.neutral,
      checkSad: formObject.sad,
      })
      .then(() => setFormObject({
        angry: '',
        anxious: '',
        disgusted: '',
        depressed: '',
        happy: '',
        fearful: '',
        neautral: '',
        sad: '',
      }))
      /*
      .then(() => loadMood())
      .catch(err => console.log(err));
      */
  };
  
  return (
    <Card>
      <FormGroup row>
        <FormControlLabel
          control={<MoodCheckbox checked={state.checkedA} onChange={handleChange} name="checkAng" />}
          label="Angry"
        />
        <FormControlLabel
          control={<MoodCheckbox checked={state.checkedA} onChange={handleChange} name="checkAnx" />}
          label="Anxious"
        />
        <FormControlLabel
          control={<MoodCheckbox checked={state.checkedB} onChange={handleChange} name="checkDis" />}
          label="Disgusted"
        />    
        <FormControlLabel
        control={<MoodCheckbox checked={state.checkedC} onChange={handleChange} name="checkDep" />}
        label="Depressed"
        />    
        <FormControlLabel
          control={<MoodCheckbox checked={state.checkedD} onChange={handleChange} name="checkHap" />}
          label="Happy"
        />
        <FormControlLabel
          control={<oodCheckbox checked={state.checkedE} onChange={handleChange} name="checkFear" />}
          label="Fearful"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkNeut" />}
          label="Neutral"
        />
        <FormControlLabel
          control={<MoodCheckbox checked={state.checkedG} onChange={handleChange} name="checkSad" />}
          label="Sad"
        />
      </FormGroup>
      <Grid item xs={12}>
        <Paper>
          <Button
            onClick={handleFormSubmit}
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Paper>
      </Grid>
    </Card>
  );
}
