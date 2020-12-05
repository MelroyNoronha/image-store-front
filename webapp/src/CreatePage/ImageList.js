import React from "react";
import './ImageList.css';

const ImageList = (props) => (
    <div id="image-list-container">
        {props.images.map((image, index) => (
            <img id="image" src={image.dataURL} key={index} alt='uploaded' />
        ))}
    </div>
)

export default ImageList;
