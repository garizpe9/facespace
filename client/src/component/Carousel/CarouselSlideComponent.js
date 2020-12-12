import React from 'react';
import { 
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    makeStyles,
    Paper,
    Typography,
    Button,
} from '@material-ui/core';
export default function CarouselSlideComponent(props) {
    const { backgroundColor, title} = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 15,
            margin: '30px',
            width: '100%',
            height: '900px',
            boxShadow: '20px 20px 20px black',
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
        <Card className={classes.card}>
            <h1>{title}</h1>
            <CardContent>
                <Card color="secondary">
                    <CardContent>
                            <CardActionArea> 
                            <CardMedia 
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1547561090-e2c1104d363f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            title="Uplifting quote in book"
                            />
                            </CardActionArea>
                    </CardContent>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h3" component="h2" className={classes.typography}>
                                Welcome to Train of Thought
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h4" component="h5">
                            Ready to start your mental health journey?
                            </Typography>
                        </Paper>
                    </Card>
            </CardContent>
        </Card>
    );
}