//This page serves as an introduction to the apps features//
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme'
import {
    Grid, 
    makeStyles, 
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CarouselComponent from '../../component/Carousel/CarouselComponent'
import BottomAppBar from '../../component/nav/BottomAppBar'

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
                    <CarouselComponent/>
                </Grid>
            </Container>
            <BottomAppBar/>
        </ThemeProvider>
    )
}    
export default Home

