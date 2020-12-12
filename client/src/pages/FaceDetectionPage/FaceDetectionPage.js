import React from "react";
import CameraComponentCard from '../../component/CameraComponent/CameraComponentCard';
import emojiImg from '../../Images/emojis.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundImage: {emojiImg}
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));


const FaceDetectionPage = () => {
    const classes = useStyles();
    return (
        <div>
            <CameraComponentCard>
            </CameraComponentCard>
        </div>
    );
};

export default FaceDetectionPage;