import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Box,
    Card, 
    CardActionArea,
    CardContent, 
    CardMedia,
    Container,
    CssBaseline, 
    Grid, 
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme';
import camGif from '../../Images/camera.gif';
import FaceDetectionComponent from '../FaceDetectionComponent/FaceDetectionComponent';

const useStyles = makeStyles((theme) => ({
    card: {
        paddingBottom: 0,  
        boxShadow: '5px 5px 5px  5px lightblue',
        width: 900,
        alignItems: 'center',
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
        height: '75%',
        width: '75%',
        paddingTop: '50.25%', 
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
        <Container>
            <Box className={classes.alignItemsAndJustifyContent}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card className={classes.card}> 
                            <Grid>
                                <Paper className={classes.paper}> 
                                <CardContent>
                                <Grid item xs={12}>
                                    <CardActionArea href={`/facerec`}>
                                        <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
                                            Smile, you're on camera!
                                        </Typography>
                                        <CardMedia
                                            className={classes.media}
                                            image={camGif}
                                            title="Facial Recognition"
                                        >/
                                        </CardMedia>
                                        <Grid item xs={12}>
                                        <CardMedia>
                                        <FaceDetectionComponent />
                                        </CardMedia>
                                        </Grid>
                                    </CardActionArea>
                                    </Grid>
                                </CardContent>
                                </Paper>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>  
            </Box>
        </Container>
        </ThemeProvider>
    )
}