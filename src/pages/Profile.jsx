import React from "react";
import UserDatails from "@components/UserDetails/UserDatails";
import EditProfileForm from "@components/EditProfileForm/EditProfileForm";
import BlogForm from "@components/BlogForm/BlogForm";
import BlogList from "@components/BlogList/BlogList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { loggedInUser } = useSelector((state) => state.auth);
  const blogs = useSelector((state) => state.blog);

  const personalBlogs =
    loggedInUser?.userName !== undefined
      ? blogs.filter((blog) => blog.blogCreator === loggedInUser?.userName)
      : blogs;
  return (
    <>
      <UserDatails />
      <EditProfileForm />
      <BlogForm />
      <BlogList blogs={personalBlogs} />
    </>
  );
};

export default Profile;
