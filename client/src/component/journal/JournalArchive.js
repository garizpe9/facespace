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
    root: {
        flexGrow: 1,
        height: "100vh"
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
    },
    borderBottom: {
        borderColor: 'success.main' 
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
    },
    font: {
        color: 'darkblue',
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
    },
}));

export default function JournalArchive() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card className={classes.card}> 
                            <Grid>
                                <Paper className={classes.paper}>  
                                <Button 
                                    href={`/journalentries`}
                                    variant="primary"
                                    type="submit">
                                    <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
                                        Past Journal Entries
                                    </Typography>
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