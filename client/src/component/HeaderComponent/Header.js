import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    CardActionArea,
    Card, 
    CardMedia, 
    CssBaseline, 
    Grid, 
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme';
import headerImg from '../../Images/escape.png'

const useStyles = makeStyles((theme) => ({
    card: {
        paddingBottom: 0,
    },
    container: {
        height: '20vh',
        width: '100%',
    },
    media: {
        height: '100%',
        width: '100%',
        paddingTop: '25.25%', 
    },
    font: {
        position: "absolute",
        top: "5%",
        width: "100%",
        textAlign: "left",
        color: "white",
        backgroundColor: "none",
        fontFamily: [
            'Shrikhand',
            'cursive',
        ]
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card className={classes.card}> 
                                <Grid item xs={12}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={headerImg}
                                        title="Train of thought"
                                        alt="subway train"
                                        />
                                        <Typography    
                                            gutterBottom
                                            variant="h4"
                                            component="h4"
                                            className={classes.font}
                                        >
                                            Welcome! 
                                        </Typography>
                                    </CardActionArea>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
            </div>
        </ThemeProvider>
    )
}