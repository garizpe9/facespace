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
import API from "../../../src/utils/API"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',

    }
});

export default function JournalItems() {
    const [entries, setEntries] = useState([])  //how react defines components - initial state definition
    const [formObject, setFormObject] = useState({}) 
  
    // Load all books and store them with setEntries
    useEffect(() => { //instead of mountring/rendering it's everytime there's a change
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getEntries()
        .then(res => 
          setEntries(res.data)
        )
        .catch(err => console.log(err));
    };
  
    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteEntry(id) {
      API.deleteEntry(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
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
                            Mood Journals 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {entries.length ? (
                            <div>
                                {entries.map(entries => (
                                <div key={entries._id}>
                                    <Link to={"/entries/" + entries._id}>
                                    <p>
                                        {entries.date} by {entries.what}
                                    </p>
                                    </Link>
                                    <button onClick={() => deleteEntry(entries._id)} > Delete </button>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
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