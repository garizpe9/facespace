import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    CardContent, 
    CardActions,
    CardActionArea,
    Card, 
    CardMedia, 
    CssBaseline, 
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme'
import API from "../../../src/utils/API"
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    typography: {
        color: 'darkblue',
        textAlign: 'center',
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
        textAlign: 'center',
    },
    font: {
        textAlign: 'center',
        color: 'darkblue',
    },
});

export default function JournalItems() {
    const [entries, setEntries] = useState([])  //how react defines components - initial state definition
    
    // Load all entries and store them with setEntries
    useEffect(() => { //instead of mountring/rendering it's everytime there's a change
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
  
    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteEntryEmo(id) {
      API.deleteEntryEmo(id)
        .then(res => loadEntries())
        .catch(err => console.log(err));
    }

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <Accordion>
                                <Grid item xs={12}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >       
                                        <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
                                            Mood Journals 
                                        </Typography>
                                    </AccordionSummary>
                                </Grid>
                                <Grid item xs={12}>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                                        {entries.length ? (
                                            <AccordionDetails>
                                                {entries.map(entries => (
                                                    <Grid container spacing={1}>
                                                        <Card className={classes.card} key={entries._id}>
                                                            <Paper className={classes.paper}>
                                                                <CardContent>
                                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                                        
                                                                            <AccordionDetails>
                                                                                {entries.date.slice(0,10)}
                                                                                <br/>Mood:{entries.mood}
                                                                                <br/> Why you were {entries.mood}: {entries.what}
                                                                                <br/> What you unpacked {entries.unpack}
                                                                                <br/> What you said about your mood : {entries.note}
                                                                            </AccordionDetails>
                                                                        
                                                                    </Typography>
                                                                </CardContent>
                                                                <CardContent>
                                                                    <Paper>
                                                                        <Button onClick={() => deleteEntryEmo(entries._id)} > Delete </Button>
                                                                    </Paper>
                                                                    <br/>
                                                                    <Paper>
                                                                    <Button size="small" color="primary">
                                                                        Share
                                                                    </Button>
                                                                    <Button size="small" color="primary">
                                                                        Learn More
                                                                    </Button>
                                                                    </Paper>
                                                                </CardContent>
                                                            </Paper>
                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </AccordionDetails>
                                            ) : (
                                            <h2 >No Results to Display</h2>
                                            )}                                                    
                                        </Typography>
                                    </AccordionDetails>
                                </Grid>
                            </Accordion>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}