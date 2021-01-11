import React, { useState } from "react";
import "./index.css";
import ImageList from "../../common/components/ImageList";

const EditPage = (props) => {
  const [images, setImages] = useState(props.location.state.data.images);

  const deleteImage = (deletionIndex) => {
    const updatedImages = images.filter(
      (_images, index) => index !== deletionIndex
    );
    setImages(updatedImages);
  };

  return (
    <div>
      <ImageList deleteImage={deleteImage} images={images} />
    </div>
  );
};

export default EditPage;
