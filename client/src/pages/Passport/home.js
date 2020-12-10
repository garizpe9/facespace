//This page serves as an introduction to the apps features//
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme'
import {
    Button,
    Card,
    CardActionArea,
    CardContent, 
    CardMedia,
    Grid, 
    makeStyles, 
    Paper, 
    Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

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
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

function Home() {
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg" align="center">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={8}>
                    <Card color="secondary">
                        <CardContent>
                            <Grid item xs={12}>
                                <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1547561090-e2c1104d363f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                title="Uplifting quote in book"
                                />
                                </CardActionArea>
                            </Grid>
                        </CardContent>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                    Welcome to Train of Thought
                                </Typography>
                            </Paper>
                            <Paper className={classes.paper}>
                                <Typography gutterBottom variant="h4" component="h5">
                                Ready to start your mental health journey?
                                </Typography>
                                <Button 
                                    href={`/login`}
                                    color="primary"
                                    size="large"
                                    type="submit">
                                        Login Here!
                                </Button>
                            </Paper>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </ThemeProvider>
    )
}    
export default Home;

