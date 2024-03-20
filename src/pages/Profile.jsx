import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfileForm from "@components/EditProfileForm/EditProfileForm";
import UserDetails from "@components/UserDetails/UserDetails";
import FilterBlogs from "@components/FilterBlogs/FilterBlogs";
import BlogForm from "@components/BlogForm/BlogForm";
import BlogList from "@components/BlogList/BlogList";
import Button from "@components/Button/Button";
import Edit from "@assets/images/icons/Edit.svg";
import Add from "@assets/images/icons/Add.svg";
import tags from "@constants/tags.json";
import "@styles/common.scss";

const Profile = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [blogFormVisible, setBlogFormVisible] = useState(false);

  const toggleEditProfileForm = () => {
    setEditProfileVisible((prevState) => !prevState);
    setBlogFormVisible(false);
  };

  const toggleBlogForm = () => {
    setBlogFormVisible((prevState) => !prevState);
    setEditProfileVisible(false);
  };

  return (
    <div className="container">
      <div className="button-holder">
        <Button onClick={toggleBlogForm}>
          <img src={Add} alt="Add Blog" />
        </Button>
        <Button onClick={toggleEditProfileForm}>
          <img src={Edit} alt="Edit Profile" />
        </Button>
      </div>
      <UserDetails />
      {editProfileVisible && (
        <EditProfileForm
          isEditProfileVisible={editProfileVisible}
          onSetEditProfileVisibility={setEditProfileVisible}
        />
      )}
      {blogFormVisible && (
        <BlogForm
          isBlogFormVisible={blogFormVisible}
          onSetBlogFormVisibility={setBlogFormVisible}
        />
      )}
    </div>
  );
};

export default Profile;
