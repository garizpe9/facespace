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
import camGif from '../../Images/camera.gif';
import FaceDetectionComponent from '../FaceDetectionComponent/FaceDetectionComponent';
import bgImage from '../../Images/cam.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
    },
    paperContainer: {
        backgroundImage: `url(${bgImage})`,
        height: '100%',
        width: '100%',
    },
    card: {
        boxShadow: '5px 5px 5px  5px lightblue',
        alignItems: 'center',
        width: '50%',
        boxShadow: '5px 5px 5px lightblue',
        gbcolor: 'grey.200',
        position: 'absolute',
        top: '1%',
        left: '25%',
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
        height: '25%',
        width: '100%',
        paddingTop: '50.25%', 
        justifyContent: 'center',
        top: '1%',
        left: '50%',
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));

export default function CameraComponentCard() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Paper className={classes.paperContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card className={classes.card}> 
                                <Grid>
                                    <Paper className={classes.paper}> 
                                        <CardContent>
                                            <Grid item xs={12}>
                                                <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
                                                    Smile, you're on camera!
                                                </Typography>
                                                <Grid item xs={12}>
                                                    <CardActionArea href={`/facerec`}> 
                                                        <CardMedia 
                                                            className={classes.media}
                                                            image={camGif}
                                                            title="Facial Recognition"
                                                        >
                                                        </CardMedia>
                                                    </CardActionArea>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <CardActionArea>
                                                    <CardMedia>
                                                    <FaceDetectionComponent />
                                                    </CardMedia>
                                                    </CardActionArea>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Paper>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>  
                </Paper>
            </div>
        </ThemeProvider>
    )
}