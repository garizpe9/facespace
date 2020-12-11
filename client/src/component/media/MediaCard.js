import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { 
    Card,
    CssBaseline,
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import MediaControlCard from '../media/MediaControlCard';
import RadioIcon from '@material-ui/icons/Radio';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardStyle: {
        alignContent: 'center',
    },
    radio: {
        height: 38,
        width: 38,
        alignItems: 'center',
    },   
}));

export default function MediaCard() {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
        <div className={classes.root}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.cardStyle} >
                        <Paper >
                            <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                <RadioIcon className={classes.radio}/>
                            </Typography>
                        </Paper>
                        <MediaControlCard/>
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}