import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    CardContent, 
    Card, 
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
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: "100vh",
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
        minWidth: '30%',
        width: '100%',
        maxHeight: '100vh',
        padding: 0,
    },
    jItem: {
        minWidth: 275,
        height: '50vh',
        boxShadow: '5px 5px 5px lightblue',
    },
    paper: {
        padding: 20,
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontFamily: "Roboto"
    },
    font: {
        color: 'darkblue',
    },
});

function GridItem({ classes }) {
    return (
      // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
      // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
      // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    );
}

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
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

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
                                    <Typography gutterBottom variant="h4" component="h2" className={classes.typography}>
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
                                                <Grid container spacing={1}>
                                                    <Paper className={classes.paper} key={entries._id}>
                                                        <CardContent>
                                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                          <Link to={"/freestyle/" + entries._id}>
                                                            <Card className={classes.card}>
                                                            {entries.date} by {entries.intention}
                                                            </Card>
                                                        </Link>
                                                        </Typography>
                                                        </CardContent>
                                                        <CardContent>
                                                            <Paper>
                                                            <Button  onClick={() => deleteEntry(entries._id)} > Delete </Button>
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
                                                </Grid>
                                            ))}
                                        </AccordionDetails>
                                        ) : (
                                        <h3>No Results to Display</h3>
                                        )}
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Accordion>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}