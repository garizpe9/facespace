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
import theme from '../../theme';
import API from "../../../src/utils/API";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',

    }
});

function EmotionJournalEntries(props) {
    const [entryEmo, setEntryEmo] = useState({})  //how react defines components - initial state definition

    // Loads the entry and sets them to entry
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
      API.getEntryEmo(id)
        .then(res => setEntryEmo(res.data))
        .catch(err => console.log(err));
    }, [])
  
    // Deletes an entry from the database with a given id
    function deleteEntryEmo(id) {
      API.deleteEntryEmo(id)
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
                            Mood Journal from {entryEmo.date} when you were {entryEmo.mood}<br />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <div>
                                    <p>
                                    What caused you to feel this emotion? {entryEmo.what} <br />
                                    Do you feel any other emotions that may lie underneath it? {entryEmo.unpack} <br />
                                    Feel free to type anything else here you would like to note about today {entryEmo.note}
                                    </p>
                                    <button onClick={() => deleteEntryEmo(entryEmo._id)} > Delete </button>
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

export default EmotionJournalEntries