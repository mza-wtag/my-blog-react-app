import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import Button from "../Button/Button";
import "./ImageDnD.scss";

const ImageDnD = ({ onDrop, imagePreview, cancelImagePreview }) => (
  <Dropzone
    onDrop={onDrop}
    accept={{
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    }}
  >
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
            <Button
              onClick={cancelImagePreview}
              className="image-dnd__container__remove-button"
            >
              X
            </Button>
          </div>
        ) : (
          <p>Drag 'n' drop an image here, or click to select an image</p>
        )}
      </div>
    )}
  </Dropzone>
);
ImageDnD.propTypes = {
  onDrop: PropTypes.func.isRequired,
  imagePreview: PropTypes.string,
  cancelImagePreview: PropTypes.func.isRequired,
};

export default ImageDnD;
