import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button,
    Card, 
    CssBaseline, 
    Grid, 
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
    card: {
        paddingBottom: 0,
    },
}));

export default function CreateJournal() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Card className={classes.card}> 
                            <Grid item xs={8}>
                                <Paper >
                                    <Typography gutterBottom variant="h3" component="h2">
                                        Create a New Journal Entry
                                    </Typography>
                                    <Button
                                        variant="primary"
                                        type="submit">
                                            Submit
                                    </Button>
                                </Paper>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>  
            </div>
        </ThemeProvider>
    )
}