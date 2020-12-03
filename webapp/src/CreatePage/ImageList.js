import React from "react";

const ImageList = (props) => (
    <div>
        {props.images.map((image) => (
            <img src={image.dataURL} alt='uploaded'/>
        ))}
    </div>
)

export default ImageList;
