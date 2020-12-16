import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Card, Grid, Paper,Radio  } from '@material-ui/core';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import pink from '@material-ui/core/colors/pink';
import API from '../../utils/API';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      height: "100vh",
  },
  paperContainer: {
      height: '100%',
      width: '100%',
  },
  button:{
    fontSize: 25,
  }
}));

export default function Checkboxes() {
    const classes = useStyles();

    return (   

    <div>
      <section>
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/angryjournal">
            Angry 👿
        </Button>
        <Button color="primary"
          className={classes.button}
          size="large"
          href='/disgustjournal'>
            Disgusted 🤮
        </Button>   
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/fearjournal">
            Fearful 😱
        </Button>
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/happyjournal">
            Happy 😊
        </Button>  
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/neutraljournal">
            Neutral 😐
        </Button>
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/sadjournal">
            Sad 😔
        </Button>
        <Button color="primary"
          className={classes.button}
          size="large"
          href="/surprisejournal">
            Surprised 😲
        </Button>
      </section>
    </div>
  );
}
  

