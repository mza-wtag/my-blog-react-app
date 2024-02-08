import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import UserDatails from "@components/UserDetails/UserDatails";
import BlogForm from "@components/BlogForm/BlogForm";

const EditBlog = () => {
  const { blogId } = useParams();
  const blogPosts = useSelector((state) => state.blog);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const blogPost = blogPosts?.find((post) => post.id === blogId);
    if (blogPost) {
      setBlogData(blogPost);
    }
  }, [blogId, blogPosts]);

  return (
    <div>
      <UserDatails />
      {blogData && <BlogForm initialData={blogData} />}
    </div>
  );
};

export default EditBlog;
