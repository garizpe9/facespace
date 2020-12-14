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
    ThemeProvider,
    Typography,
    AccordionActions,
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
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
        color: 'darkblue',
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
        width: '100%',
    },
    font: {
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
      API.getEntries()
        .then(res => 
          setEntries(res.data)
        )
        .catch(err => console.log(err));
    };
    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteEntry(id) {
      API.deleteEntry(id)
        .then(res => loadEntries())
        .catch(err => console.log(err));
    }
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
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
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                        Free Style Journals 
                                    </Typography>
                                </AccordionSummary>
                            </Grid>
                            <Grid item xs={12}>
                                <AccordionDetails>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                                    {entries.length ? (
                                        <AccordionDetails>
                                            {entries.map(entries => (
                                            <Card className={classes.card} key={entries._id}>
                                                <Link to={"/freestyle/" + entries._id}>
                                                <Card className={classes.card}>
                                                    {entries.date} by {entries.intention}
                                                </Card>
                                                </Link>
                                                <button onClick={() => deleteEntry(entries._id)} > Delete </button>
                                            </Card>
                                            ))}
                                        </AccordionDetails>
                                        ) : (
                                        <h3>No Results to Display</h3>
                                        )}
                                    </Typography>
                                </AccordionDetails>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Accordion>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}