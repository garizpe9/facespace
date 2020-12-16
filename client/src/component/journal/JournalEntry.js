import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
    Card,  
    CardContent,
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
    textfield: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '80%',
    },
    typography: {
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
        color: 'darkblue',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary,
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    font: {
        color: 'darkblue',
    },
}));

export default function JournalEntry() {
    const [entries, setEntries] = useState({})
    const [formObject, setFormObject] = useState({
        intention: '',
        nurture: '',
        love1: '',
        love2: '',
        love3: '',
        well1: '',
        well2: '',
        well3: '',
        notWell: '',
        vent: ''
    })
 
    useEffect(() => { //instead of mountring/rendering it's everytime there's a change
      loadEntries()
    }, [])

  // Loads all entries and sets them to entries
  function loadEntries() {
    API.getEntries()
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
        API.saveEntry({
        intention: formObject.intention,
        nurture: formObject.nurture,
        love1: formObject.love1,
        love2: formObject.love2,
        love3: formObject.love3,
        well1: formObject.well1,
        well2: formObject.well2,
        well3: formObject.well3,
        notWell: formObject.notWell,
        vent: formObject.vent
        })
        .then(() => setFormObject({
            intention: '',
            nurture: '',
            love1: '',
            love2: '',
            love3: '',
            well1: '',
            well2: '',
            well3: '',
            notWell: '',
            vent: ''
        }))
        .then(() => loadEntries())
        .catch(err => console.log(err));
    };
    const classes = useStyles();
    const reload = () => window.location.reload();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                            Today's Journal
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper}>
                                                <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
                                                    My Daily Intention
                                                </Typography>
                                                <TextField
                                                    multiline
                                                    rowsMax="4"
                                                    className={classes.textfield}
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="Energy Flows Where Intention Goes"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="intention"
                                                    value={formObject.intention}
                                                />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
                                                    To Nurture Myself
                                                </Typography>
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="Today I Will..."
                                                    variant="outlined"
                                                    color="primary"
                                                    name="nurture"
                                                    value={formObject.nurture}
                                                />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                    3 Things I Love About Myself
                                                </Typography>
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="1"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="love1"
                                                    value={formObject.love1}
                                                />
                                                <br />                    
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="2"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="love2"
                                                    value={formObject.love2}
                                                />
                                                <br />
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="3"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="love3"
                                                    value={formObject.love3}
                                                />
                                                <br />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                    What Went Well Today?
                                                </Typography>
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="1"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="well1"
                                                    value={formObject.well1}
                                                />
                                                <br />                    
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="2"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="well2"
                                                    value={formObject.well2}
                                                />
                                                <br />
                                                <TextField
                                                    onChange={handleInputChange}
                                                    id="outlined-secondary"
                                                    label="3"
                                                    variant="outlined"
                                                    color="primary"
                                                    name="well3"
                                                    value={formObject.well3}
                                                />
                                                <br />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                        What Didn't and How Can We Adjust?
                                                    </Typography>
                                                    <TextField
                                                        onChange={handleInputChange}
                                                        id="outlined-secondary"
                                                        label="Let Me Tell You"
                                                        variant="outlined"
                                                        color="primary"
                                                        name="notWell"
                                                        value={formObject.notWell}
                                                    />
                                                    <br />                    
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper className={classes.paper} controlId="exampleForm.ControlTextarea1">
                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                                        Let's Vent!
                                                    </Typography>
                                                    <TextField 
                                                        onChange={handleInputChange}
                                                        id="outlined-secondary"
                                                        label="Here's the tea"
                                                        variant="outlined"
                                                        color="primary"
                                                        name="vent"
                                                        value={formObject.vent}
                                                    />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Paper item xs={12} className={classes.paper}>
                                        <Button
                                            color="primary"
                                            alignContent="center"
                                            type="submit"
                                            href= {`/home`}
                                            onClick={() => reload()}>
                                                
                                                Cancel
                                        </Button>
                                        <Button
                                            href= {`/home`}
                                            onClick={handleFormSubmit}
                                            color="primary"
                                            alignContent="center"
                                            type="submit">
                                                Submit
                                        </Button>
                                    </Paper>
                                </Grid>
                            </CardContent>
                        </Card>
                        <br/>
                        <br/>
                    </Grid>
                </Grid>
            </div>  
        </ThemeProvider>
    )
}

