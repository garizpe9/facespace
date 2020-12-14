import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea,
    CardContent, 
    CardMedia,
    CssBaseline, 
    Grid, 
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme';
import scanImg from '../../Images/scan.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        paddingBottom: 0,        
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
    media: {
        height: '100%',
        width: '100%',
        paddingTop: '25.25%', 
    },
}));

export default function Mood() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Card className={classes.card}> 
                            <Grid>
                                <Paper className={classes.paper}> 
                                <CardContent>
                                    <CardActionArea href={`/facerec`}>
                                        <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
                                            Read Your Mood!
                                        </Typography>
                                        <CardMedia
                                            className={classes.media}
                                            image={scanImg}
                                            title="Facial Recognition"
                                        >
                                        </CardMedia>
                                    </CardActionArea>
                                </CardContent>
                                </Paper>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>  
            </div>
        </ThemeProvider>
    )
}