import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
    CssBaseline, 
    Grid, 
    Paper, 
    TextField, 
    ThemeProvider 
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "100vh",
    },
    typography: {
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary,
    },
    card: {
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

function FearJournalEntry( { desc, what, unpack, note } ) {

    const [entries, setEntries] = useState({})

    const [formObject, setFormObject] = useState({
        mood: '',
        what: '',
        unpack: '',
        note: ''
      })

// Load all entries and store them with setEntries
  useEffect(() => {
    loadEntries()
  }, [])

  // Loads all entries and sets them to entries
  function loadEntries() {
    API.getEntriesEmo()
      .then(res => 
        setEntries(res.data)
      )
      .catch(err => console.log(err));
  };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
          API.saveEntryEmo({
            mood: "Fear",
            what: formObject.what,
            unpack: formObject.unpack,
            note: formObject.note
          })
            .then(() => setFormObject({
        what: '',
        unpack: '',
        note: ''
            }))
            .then(() => loadEntries())
            .catch(err => console.log(err));
      };

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" component="h2" className={classes.typography}>
                            So You're Scared...
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2" className={classes.typography}>
                        {desc}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                        {what}
                        </Typography>
                        <TextField
                            onChange={handleInputChange}
                            id="outlined-secondary"
                            label="Today I was fearful of..."
                            variant="outlined"
                            color="primary"
                            name="what"
                            value={formObject.what}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                        {unpack}
                        </Typography>
                        <TextField
                            onChange={handleInputChange}
                            id="outlined-secondary"
                            label="Actually, I also felt..."
                            variant="outlined"
                            color="primary"
                            name="unpack"
                            value={formObject.unpack}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                        {note}
                        </Typography>
                        <TextField
                            onChange={handleInputChange}
                            id="outlined-secondary"
                            label="One more thing..."
                            variant="outlined"
                            color="primary"
                            name="note"
                            value={formObject.note}
                        />
                    </Paper>
                </Grid>
                <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                        <Button
                            onClick={handleFormSubmit}
                            variant="primary"
                            type="submit">
                                Submit
                        </Button>
                    </Paper>
                </Grid>
            </Grid>                     
        </div>  
        </ThemeProvider>
    )
}

export default FearJournalEntry