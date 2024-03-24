import {
  GET_BLOG_POSTS,
  SEARCH_BLOG_POSTS,
  FILTER_BY_TAG,
} from "@constants/actionTypes";

import supabase from "./../app/supabase";

export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      const { data, error } = await supabase.from("blogs").select("*");
      if (error) {
        throw new Error(error.message);
      }
      dispatch(getBlogs(data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
};

export const createBlogPost = (blog) => {
  const newBlog = {
    title: blog.title,
    body: blog.body,
    image: blog.image,
    tags: blog.tags,
    userId: blog.userId,
    creatorImage: blog.creatorImage,
    creatorFullName: blog.creatorFullName,
  };

  return async (dispatch) => {
    try {
      const { error } = await supabase.from("blogs").insert([newBlog]);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(fetchBlogs());
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
};

export const getBlogs = (posts) => ({
  type: GET_BLOG_POSTS,
  payload: posts,
});

export const updateBlogPost = (blogId, updatedBlogData) => {
  return async (dispatch) => {
    try {
      const { error } = await supabase
        .from("blogs")
        .update(updatedBlogData)
        .eq("id", blogId);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(fetchBlogs());
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };
};

export const searchBlogPosts = (searchQuery) => {
  return {
    type: SEARCH_BLOG_POSTS,
    payload: searchQuery,
  };
};

export const filterByTags = (tags) => ({
  type: FILTER_BY_TAG,
  payload: tags,
});
