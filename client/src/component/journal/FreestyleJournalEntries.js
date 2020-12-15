import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button,
    CardContent, 
    CardActions,
    CardActionArea,
    Card, 
    CardMedia, 
    CssBaseline, 
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme'
import API from "../../utils/API"
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',

    }
});

function FreestyleJournalEntries(props) {
    const [entry, setEntry] = useState({})  //how react defines components - initial state definition

    // Loads the entry and sets them to entry
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
      API.getEntry(id)
        .then(res => setEntry(res.data))
        .catch(err => console.log(err));
    }, [])
  
    // Deletes an entry from the database with a given id
    function deleteEntry(id) {
      API.deleteEntry(id)
    }

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Free Style Journal from {entry.date} <br />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <div>
                                    <p>
                                    My daily intention: {entry.intention} <br />
                                    To nurture myself I will: {entry.nurture} <br />
                                    3 things I love about myself: {entry.love1}, {entry.love2}, {entry.love3} <br />
                                    3 things that went well today: {entry.well1}, {entry.well2}, {entry.well3} <br />
                                    What didn't go well and how can we adjust?: {entry.notWell} <br />
                                    Let's vent: {entry.vent}
                                    </p>
                                    <button onClick={() => deleteEntry(entry._id)} > Delete </button>
                                </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default FreestyleJournalEntries