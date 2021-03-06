import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    ThemeProvider
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh"
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
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    p: {
        fontSize: '100%',
        fontWeight: 100,
        fontFamily: [
            'Roboto Condensed',
            'sans-serif',
        ],
        color: 'darkblue',
    },
    textfield: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '80%'
    },
    button: {
        marginBottom: theme.spacing(7),
    }
}));

function AngryJournalEntry({ desc, what, unpack, note, ...props }, ) {
    const [entries, setEntries] = useState({})
    const [formObject, setFormObject] = useState({
        user: '',
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
        setFormObject({ ...formObject, [name]: value })
        
    };
    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveEntryEmo({
            user: props.username,
            mood: "Angry",
            what: formObject.what,
            unpack: formObject.unpack,
            note: formObject.note
        })
            .then(() => setFormObject({
                user: '',
                what: '',
                unpack: '',
                note: '',
            }))
            .then(() => loadEntries())
            .catch(err => console.log(err));
            window.location.assign("/home")
    };
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Grid item xs={12}>
                    <Card>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" component="h2" className={classes.typography}>
                                    So You're Angry...
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h2" className={classes.typography}>
                                    <p className={classes.p}>
                                        {desc}
                                    </p>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                    <p className={classes.p}>
                                        {what}
                                    </p>
                                </Typography>
                                <TextField
                                    multiline
                                    rowsMax="4"
                                    className={classes.textfield}
                                    onChange={handleInputChange}
                                    id="outlined-secondary"
                                    label="Today I was angry about..."
                                    variant="outlined"
                                    color="primary"
                                    name="what"
                                    value={formObject.what}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} >
                                <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                                    <p className={classes.p}>
                                        {unpack}
                                    </p>
                                </Typography>
                                <TextField
                                    multiline
                                    rowsMax="4"
                                    className={classes.textfield}
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
                                    <p className={classes.p}>
                                        {note}
                                    </p>
                                </Typography>
                                <TextField
                                    multiline
                                    rowsMax="4"
                                    className={classes.textfield}
                                    onChange={handleInputChange}
                                    id="outlined-secondary"
                                    label="Today I was angry about..."
                                    variant="outlined"
                                    color="primary"
                                    name="note"
                                    value={formObject.note}
                                />
                            </Paper>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Button
                                        className={classes.button}
                                        size="large"
                                        variant="outlined"
                                        color="success"
                                        href= {`/home`}
                                        onClick={handleFormSubmit}
                                        type="submit"
                                        
                                        >
                                        
                                        Submit
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default AngryJournalEntry