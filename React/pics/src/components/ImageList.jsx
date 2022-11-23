import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ imageData }) {
  return (
    <div className="image-list">
      {imageData.map((image) => (
        <ImageShow key={image.id} imageUrl={image.urls.thumb} />
      ))}
    </div>
  );
}

export default ImageList;
