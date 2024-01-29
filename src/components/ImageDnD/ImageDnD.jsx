import React from "react";
import Dropzone from "react-dropzone";
import "./ImageDnD.scss";

const ImageDnD = ({ onDrop, imagePreview, cancelImagePreview }) => (
  <Dropzone onDrop={onDrop} accept="image/*">
    {({ getRootProps, getInputProps }) => (
      <div className="image-dnd" {...getRootProps()}>
        <input {...getInputProps()} />
        {imagePreview ? (
          <div className="image-dnd__container">
            <img
              src={imagePreview}
              alt="Preview"
              className="image-dnd__container__image"
            />
            <button
              type="button"
              onClick={cancelImagePreview}
              className="image-dnd__container__remove-button"
            >
              X
            </button>
          </div>
        ) : (
          <p>Drag 'n' drop an image here, or click to select an image</p>
        )}
      </div>
    )}
  </Dropzone>
);

export default ImageDnD;
