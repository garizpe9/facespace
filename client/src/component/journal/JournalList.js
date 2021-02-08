import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardContent,
    CssBaseline, 
    Grid, 
    Paper, 
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme'
import JournalItems from './JournalItems';
import EmotionJournalItems from './EmotionJournalItems';

const useStyles = makeStyles((theme,...props) => ({
    root: {
      flexGrow: 1,
      height: "100vh",
    },
    typography: {
        fontFamily: [
          'Shrikhand',
          'cursive',
        ],
        color: 'darkblue', 
    },
    paper: {
        boxShadow: '5px 5px 5px lightblue',
        textAlign: 'center',
        paddingBottom: '2%',
        width: '100%',
    },
    card: {
        alignItems: 'center',
        width: '100%',
        boxShadow: '5px 5px 5px lightblue',
        gbcolor: 'grey.200',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

//export default function JournalList(...props) {
    class JournalList extends Component{
        constructor(props) {
            super(props);}
    //const classes = useStyles();
    render(){
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography gutterBottom variant="h3" component="h2">
                                Journal Entries
                            </Typography>
                        </Paper>
                        <br/>
                        <Card >
                            <CardContent>
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <JournalItems username={this.props.username} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <EmotionJournalItems username={this.props.username}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
    }



//     <ThemeProvider theme={theme}>
//     <CssBaseline />
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>
//                         <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
//                             Journal Entries
//                         </Typography>
//                     </Paper>
//                     <br/>
//                     <Card className={classes.card}>
//                         <CardContent>
//                             <Grid item xs={12}>
//                                 <Grid item xs={12}>
//                                     <JournalItems username={this.props.username} />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <EmotionJournalItems username={this.props.username}/>
//                                 </Grid>
//                             </Grid>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </div>
//     </ThemeProvider>
// );

export default JournalList;
