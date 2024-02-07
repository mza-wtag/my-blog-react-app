import React from "react";
import UserDatails from "@components/UserDetails/UserDatails";
import EditProfileForm from "@components/EditProfileForm/EditProfileForm";
import BlogForm from "@components/BlogForm/BlogForm";
import BlogList from "@components/BlogList/BlogList";

const Profile = () => {
  return (
    <>
      <UserDatails />
      <EditProfileForm />
      <BlogForm />
      <BlogList />
    </>
  );
};

export default Profile;
