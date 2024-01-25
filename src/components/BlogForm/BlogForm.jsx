import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addBlogPostAndLocalStorage } from "./../../actions/blogActions";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.body) {
    errors.body = "Body is required";
  }

  if (!values.image) {
    errors.image = "Image URL is required";
  }

  if (!values.tags) {
    errors.tags = "Tags are required";
  }

  return errors;
};

const BlogForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addBlogPostAndLocalStorage(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <Field name="title" component="input" type="text" />
            <div style={{ color: "red" }}>
              <small>{form.getState().errors.title}</small>
            </div>
          </div>
          <div>
            <label>Body</label>
            <Field name="body" component="textarea" />
            <div style={{ color: "red" }}>
              <small>{form.getState().errors.body}</small>
            </div>
          </div>
          <div>
            <label>Image URL</label>
            <Field name="image" component="input" type="text" />
            <div style={{ color: "red" }}>
              <small>{form.getState().errors.image}</small>
            </div>
          </div>
          <div>
            <label>Tags</label>
            <Field name="tags" component="input" type="text" />
            <div style={{ color: "red" }}>
              <small>{form.getState().errors.tags}</small>
            </div>
          </div>
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default BlogForm;
