import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addBlogPostInLocalStorage } from "./../../actions/blogActions";
import ImageDnD from "../ImageDnD/ImageDnD";
import SelectBox from "../SelectBox/SelectBox";
import "./BlogForm.scss";

const BlogForm = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const onSubmit = async (values, form) => {
    const blog = { ...values, image: imagePreview, tags: selectedTags };
    await dispatch(addBlogPostInLocalStorage(blog));
    setImagePreview(null);
    form.reset();
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

  const handleCancel = (form) => {
    form.reset();
    setImagePreview(null);
  };

  const tags = [
    { value: "Technology", label: "Technology" },
    { value: "Poetry", label: "Poetry" },
    { value: "Films", label: "Films" },
    { value: "World Politics", label: "World Politics" },
  ];

  const required = (value) => (value ? undefined : "Required");

  const handleChangeTags = (selectedOptions) => {
    setSelectedTags(selectedOptions.map((option) => option.value));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        }
        if (!values.body) {
          errors.body = "Required";
        }
        return errors;
      }}
      render={({ handleSubmit, form }) => (
        <form className="blog-form" onSubmit={handleSubmit}>
          <div className="blog-form__title-tag-wrapper">
            <div className="blog-form__title-container">
              <label className="blog-form__label">Title *</label>
              <Field
                className="blog-form__input"
                name="title"
                component="input"
                type="text"
                validate={required}
              />
            </div>
            <div className="blog-form__tag-container">
              <label className="blog-form__label">Tags</label>
              <SelectBox
                tags={tags}
                selectedTags={selectedTags}
                handleChangeTags={handleChangeTags}
              />
            </div>
          </div>

          <div>
            <label className="blog-form__label">Banner Image</label>
            <ImageDnD
              onDrop={handleDrop}
              imagePreview={imagePreview}
              cancelImagePreview={cancelImagePreview}
            />
          </div>
          <div>
            <label className="blog-form__label">Body *</label>
            <Field
              className="blog-form__textarea"
              name="body"
              component="textarea"
              validate={required}
            />
          </div>
          <div className="blog-form__buttons">
            <button className=" blog-form__buttons--submit" type="submit">
              Submit
            </button>
            <button
              className="blog-form__buttons--cancel"
              type="button"
              onClick={() => handleCancel(form)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default BlogForm;
