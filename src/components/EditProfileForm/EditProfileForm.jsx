import React, { useEffect, useState } from "react";
import "./EditProfileForm.scss";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../actions/authActions";
import Button from "../Button/Button";
import ImageDnD from "../ImageDnD/ImageDnD";

const EditProfileForm = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState("");

  const onSubmit = (values) => {
    const updatedValues = { ...values, profileImage: imagePreview };
    dispatch(updateUserProfile(loggedInUser?.userId, updatedValues));
  };

  const onCancel = (form) => {
    form.reset();
    setImagePreview(null);
    setImageName("");
  };

  const handleImageDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setImageName(file.name);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
  }, [loggedInUser]);

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
            <ImageDnD onDrop={handleImageDrop} />
          </div>
          <div className="image-preview">
            {imagePreview && (
              <>
                <span>{imageName}</span>
                <img src={imagePreview} alt="Profile Preview" />
              </>
            )}
          </div>
          <div className="buttons">
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
            <Button onClick={onCancel} type="button">
              Cancel
            </Button>
          </div>
        </form>
      )}
    />
  );
};

export default EditProfileForm;
