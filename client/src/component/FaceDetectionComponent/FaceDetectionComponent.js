import React, { useEffect, useRef, useState } from "react";
import { CameraComponent } from "../CameraComponent/CameraComponent";
import CanvasComponent from "../CanvasComponent/CanvasComponent";
import styled from "styled-components";
import {
    nets, loadFaceExpressionModel,
     detectSingleFace, TinyFaceDetectorOptions,
} from "face-api.js";
import ModalComponent from "../ModalComponent/ModalComponent"


const ContainerComponent = styled.div`
    position: relative;
    height: 100%;
    margin: 0;
`;

const OverlayComponent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const FaceDetectionComponent = () => {
    const videoRef = useRef();
    const canvasRef = useRef();
    const [cameraReady, setCameraReady] = useState(false);
    const [emotion, setEmotion] = useState()

    const cameraIsReady = () => {
        setCameraReady(true);
    };

    const initModels = async () => {
        await nets.tinyFaceDetector.load("/models/");
        await loadFaceExpressionModel("/models/");
    }

    const redirectToPage = (emotion) => {
        console.log(emotion)
        setEmotion(emotion)
        // TODO: Redirect Emotion
    }

    const startFaceDetection = async () => {
        const options = new TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 });
        const result = await detectSingleFace(videoRef.current, options).withFaceExpressions();
        if (result) {

            /////// expression capture ////////

            const expressions = result.expressions;
            const maxValue = Math.max(...Object.values(expressions));
            const emotion = Object.keys(expressions).filter(
                item => expressions[item] === maxValue
            );

            redirectToPage(emotion[0]);
            
            /////// expression capture ////////

        } else {
            setTimeout(() => startFaceDetection());
        }

    };

    useEffect(() => {
        if (cameraReady) {
            startFaceDetection();
        }
    }, [cameraReady])


    useEffect(() => {
        initModels();
    }, []);

    return (
        <ContainerComponent
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5px'
        }}>
            <CameraComponent videoRef={videoRef} onReady={cameraIsReady} />
            <OverlayComponent>
                <CanvasComponent canvasRef={canvasRef} />
            </OverlayComponent>
            <ModalComponent emotion={emotion}/>
        </ContainerComponent>
    );
};

export default FaceDetectionComponent;