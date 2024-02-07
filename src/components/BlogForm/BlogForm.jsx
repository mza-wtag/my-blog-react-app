import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addBlogPostInLocalStorage } from "@actions/blogActions";
import ImageDnD from "@components/ImageDnD/ImageDnD";
import SelectBox from "@components/SelectBox/SelectBox";
import tags from "@constants/tags.json";
import "@components/BlogForm/blogForm.scss";
import Button from "@components/Button/Button";

const BlogForm = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const { profileImage, fullName, userName } = loggedInUser;

  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const onSubmit = (values, form) => {
    const blog = {
      ...values,
      image: imagePreview,
      tags: selectedTags,
      creatorImage: profileImage,
      creatorFullName: fullName,
      blogCreator: userName,
    };
    dispatch(addBlogPostInLocalStorage(blog));
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

  const required = (value) => (value ? undefined : "Required");
  const handleChangeTags = (selectedOptions) => {
    setSelectedTags(selectedOptions?.map((option) => option.value));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Title Required";
        }
        if (!values.body) {
          errors.body = "Body Required";
        }
        return errors;
      }}
      render={({ handleSubmit, form }) => (
        <form className="blog-form" onSubmit={handleSubmit}>
          <div className="blog-form__title-tag-wrapper">
            <div className="blog-form__title-container">
              <label className="blog-form__label">Title*</label>
              <Field
                className="blog-form__input"
                name="title"
                component="input"
                type="text"
                validate={required}
              />
            </div>
            <div className="blog-form__tag-container">
              <label className="blog-form__label">Tags*</label>
              <SelectBox
                tags={tags}
                selectedTags={selectedTags}
                handleChangeTags={handleChangeTags}
              />
            </div>
          </div>

          <div>
            <label className="blog-form__label">Banner Image*</label>
            <ImageDnD
              onDrop={handleDrop}
              imagePreview={imagePreview}
              cancelImagePreview={cancelImagePreview}
            />
          </div>
          <div>
            <label className="blog-form__label">Body*</label>
            <Field
              className="blog-form__textarea"
              name="body"
              component="textarea"
              validate={required}
            />
          </div>
          <div className="blog-form__buttons">
            <Button
              className=" blog-form__buttons--submit"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              className="blog-form__buttons--cancel"
              type="button"
              onClick={() => handleCancel(form)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    />
  );
};

BlogForm.propTypes = {
  loggedInUser: PropTypes.shape({
    profileImage: PropTypes.string,
    fullName: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }),
};
export default BlogForm;
