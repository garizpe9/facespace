import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CssBaseline, 
    Grid, 
    Paper, 
    ThemeProvider,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';

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
      background: theme.palette.grey,
    },
    card: {
        width: '90%',
        boxShadow: '5px 5px 5px lightblue',
        gbcolor: 'grey.200',
        color: 'white',
        p: 15,
        position: 'absolute',
        top: '60%',
        left: '5%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    p: {
        fontFamily: [
        'Roboto Condensed',
            'sans-serif',
        ]
    },
}));
function Aboutus(){
    const classes = useStyles();
    return (
        <ThemeProvider thee={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={12}>
                    <Card className={classes.card}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" component="h2" className={classes.typography}>
                                About Us
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h4" className={classes.p}>
                                <a href = 'https://www.cnbc.com/2020/03/20/coronavirus-wake-up-millennials-prioritize-your-mental-health-right-now-says-psychotherapist.html'>
                                "According to a 2019 report from the Blue Cross Blue Shield Association, major depression diagnoses are rising at a faster rate for millennials 
                                — a 47% increase since 2013 — compared to any other age group. And a 2018 survey from the American Psychiatry Association found that they are by 
                                and large the most anxious generation."</a><br/><br/>

                                In these trying times, not everyone has access to needed resources. Train of Thought understands this limitation and has created this space with 
                                these users in mind.<br/><br/>

                                Train of Thought implores users to sit down and elaborate on their thoughts and feelings on any subject. With our journal entry section, users have 
                                free reign to vent out any frustrations or highlight special parts of their day. <br/><br/>

                                Train of Thought includes a mood recognition page that detects a user's mood by using their camera and curates prompts for those who need some 
                                guidance on how to externalize their temperament. <br/><br/>

                                Everyone deserves a voice and a safe space for their Train of Thought.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Card>
                </Grid>
                <br/>
                <br/>
            </div>  
        </ThemeProvider>
    )
}

export default Aboutus