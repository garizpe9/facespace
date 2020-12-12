import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    CssBaseline, 
    Grid, 
    Paper, 
    ThemeProvider 
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
function Aboutus(){
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
            
                <Grid item xs={12}>
                    <Grid item xs={4}/>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" component="h2" className={classes.typography}>
                               About Us
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h4" className={classes.typography}>
                            In these trying times, not everyone has access to needed resources. Train of Thought understands this limitation and has created this space with these users in mind.<br/><br/>

                            Train of Thought implores users to sit down and elaborate on their thoughts and feelings on any subject. With our journal entry section, users have free reign to vent out any frustrations or highlight special parts of their day. <br/><br/>

                            Train of Thought includes a mood recognition page that detects a user's mood by using their camera and curates prompts for those who need some guidance on how to externalize their temperament. <br/><br/>

                            Everyone deserves a voice and a safe space for their Train of Thought.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
                <br/>
                <br/>
            </div>  
        </ThemeProvider>
    )
}

export default Aboutus