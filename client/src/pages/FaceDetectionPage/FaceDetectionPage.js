import React from "react";
import CameraComponentCard from '../../component/CameraComponent/CameraComponentCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    return (
        <div>
            <CameraComponentCard/>
        </div>
    );
};

export default FaceDetectionPage;