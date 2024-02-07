import UserDatails from "@components/UserDetails/UserDatails";
import React from "react";
import { useParams } from "react-router";

const EditBlog = () => {
  const { blogId } = useParams();
  return (
    <h1>
      <UserDatails />
      <h1>Here id the specific user blog : {blogId}</h1>
    </h1>
  );
};

export default EditBlog;
