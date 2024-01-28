import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addBlogPostAndLocalStorage } from "./../../actions/blogActions";
import Dropzone from "react-dropzone";
import Select from "react-select";

const BlogForm = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (values) => {
    const blog = { ...values, image: imagePreview };
    await dispatch(addBlogPostAndLocalStorage(blog));
    setImagePreview(null);
  };

  const handleDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setImagePreview(base64Image);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const cancelImagePreview = () => {
    setImagePreview(null);
  };

  const tags = [
    { value: "technology", label: "Technology" },
    { value: "poetry", label: "Poetry" },
    { value: "films", label: "Films" },
    { value: "world politics", label: "World Politics" },
  ];

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <div>
            <label>Body</label>
            <Field name="body" component="textarea" />
          </div>
          <div>
            <label>Image</label>
            <Dropzone onDrop={handleDrop} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} style={dropzoneStyle}>
                  <input {...getInputProps()} />
                  {imagePreview ? (
                    <div style={{ position: "relative" }}>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                      <button
                        type="button"
                        onClick={cancelImagePreview}
                        style={crossButtonStyle}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <p>
                      Drag 'n' drop an image here, or click to select an image
                    </p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div>
            <label>Tags</label>
            <Field name="tags" component={Select} options={tags} isMulti />
          </div>
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </form>
      )}
    />
  );
};

const dropzoneStyle = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const crossButtonStyle = {
  position: "absolute",
  top: "5px",
  right: "5px",
  backgroundColor: "#ffffff",
  border: "none",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  fontSize: "12px",
  cursor: "pointer",
};

export default BlogForm;
