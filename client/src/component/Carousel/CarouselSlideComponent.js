import React from 'react';
import { 
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    CssBaseline,
    makeStyles,
    Paper,
    Typography,
    ThemeProvider,
} from '@material-ui/core';
import theme from '../../theme';

export default function CarouselSlideComponent(props) {
    const { backgroundColor, image, title, subtitle } = props.content;
    const useStyles = makeStyles(() => ({
        root: {
            flexGrow: 1,
            height: "100vh",
        },
        card: {
            backgroundColor,
            borderRadius: 15,
            marginLeft: '20%',
            marginTop: '5%',
            width: '60%',
            height: '80%',
            boxShadow: '20px 20px 20px grey',
            display: 'flex',
            justifyContent: 'center',
        },
        media: {
            padding: 0,
            margin: 20,
            height: 600,
            width: 600,
        },
    }));
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div className={classes.root}>
                <Card className={classes.card}>
                        <Card >
                            <CardContent>
                                <CardActionArea> 
                                <CardMedia 
                                className={classes.media}
                                image={image}
                                />
                                </CardActionArea>
                            </CardContent>
                            <CardContent>
                                <Paper >
                                    <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                        {title}
                                    </Typography>
                                </Paper>
                                <Paper>
                                    <Typography gutterBottom variant="h4" component="h5">
                                        {subtitle}
                                    </Typography>
                                </Paper>
                            </CardContent>
                        </Card>
                </Card>
            </div>
        </ThemeProvider>
    );
}