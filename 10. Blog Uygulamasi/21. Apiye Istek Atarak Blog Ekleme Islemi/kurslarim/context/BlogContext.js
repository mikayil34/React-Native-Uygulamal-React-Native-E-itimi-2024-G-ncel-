import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return  action.payload;
    
    case 'edit_blogpost':
      return state.map((blogPost) => blogPost.id == action.payload.id ? action.payload : blogPost);
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    const response = await jsonServer.post('/blogposts',{title,content});
     
    if (callBack) {
      callBack();
    }
  };
};



const editBlogPost = (dispatch) => {
  return (title, content, id, callBack) => {
    dispatch({
      type: 'edit_blogpost', payload: {
        title, content, id
      }
    });
    if (callBack) {
      callBack();
    }
  };

};
const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogpost', payload: response.data });
  };

};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost ,getBlogPost},
  []
);
