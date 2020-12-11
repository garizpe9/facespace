import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    CardContent, 
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
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.secondary,
    },
    card: {
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
                        <Card>
                            <CardContent>
                                <Grid item xs={12}>
                                    <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=1200&q=20"
                                    title="Uplifting quote in book"
                                    />
                                    </CardActionArea>
                                </Grid>
                            </CardContent>
                            <CardContent>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                            Journal Entries
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </CardContent>
                            <CardContent>
                                <Grid item xs={12}>
                                </Grid>
                            </CardContent>
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
