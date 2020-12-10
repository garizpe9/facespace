import React from "react";

const canvasStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    objectFit: "cover"
};

const CanvasComponent = (props) => {
    const { canvasRef } = props;
    return (
        <canvas ref={canvasRef} style={canvasStyle} />
    );
}

export default CanvasComponent;