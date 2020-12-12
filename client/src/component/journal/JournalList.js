import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    CssBaseline, 
    Grid, 
    Paper, 
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme'
import JournalItems from './JournalItems';

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
        boxShadow: '5px 5px 5px lightblue',
    },
    card: {
        boxShadow: '5px 5px 5px green',
        maxWidth: 345,
        marginTop: '30%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function JournalList() {
    const classes = useStyles();
    const [spacing] = React.useState(2);
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                    Journal Entries
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                        <Paper className={classes.paper}>
                            <Grid container className={classes.root} spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container justify="center" spacing={spacing}>
                                    <JournalItems/>
                                    <JournalItems/>
                                    <JournalItems/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
