import React, { useEffect } from "react";
import "./EditProfileForm.scss";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../actions/authActions";

const EditProfileForm = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateUserProfile(loggedInUser?.userId, values));
  };

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
  }, [loggedInUser]);

  const onCancel = () => {};

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        fullName: loggedInUser?.fullName || "",
        subtitle: loggedInUser?.subtitle || "",
        about: loggedInUser?.about || "",
      }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <Field
              name="fullName"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label>Subtitle</label>
            <Field
              name="subtitle"
              component="input"
              type="text"
              placeholder="Subtitle"
            />
          </div>
          <div>
            <label>About</label>
            <Field name="about" component="textarea" placeholder="About" />
          </div>
          <div>
            <label>Profile Image</label>
            <Field
              name="profileImage"
              component="input"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default EditProfileForm;
