import React, { useState } from "react";
import UserDatails from "@components/UserDetails/UserDetails";
import EditProfileForm from "@components/EditProfileForm/EditProfileForm";
import BlogForm from "@components/BlogForm/BlogForm";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";
import Button from "@components/Button/Button";
import Add from "@assets/images/icons/Add.svg";
import Edit from "@assets/images/icons/Edit.svg";
import "@styles/common.scss";

const Profile = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const blogs = useSelector((state) => state.blog);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [blogFormVisible, setBlogFormVisible] = useState(false);

  const personalBlogs =
    loggedInUser?.userName &&
    blogs?.filter((blog) => blog.userId === loggedInUser?.userId);

  return (
    <div className="container">
      <div className="button-holder">
        <Button onClick={() => setBlogFormVisible(!blogFormVisible)}>
          <img src={Add} alt="Add Blog" />
        </Button>
        <Button onClick={() => setEditProfileVisible(!editProfileVisible)}>
          <img src={Edit} alt="Edit Profile" />
        </Button>
      </div>
      <UserDatails />
      {editProfileVisible && <EditProfileForm />}
      {blogFormVisible && <BlogForm />}
      <h2>My published posts</h2>
      <BlogList blogs={personalBlogs} />
    </div>
  );
};

export default Profile;
