import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ imageData }) {
  return (
    <>
      {imageData.map((image) => (
        <ImageShow key={image.id} imageUrl={image.urls.thumb} />
      ))}
    </>
  );
}

export default ImageList;
