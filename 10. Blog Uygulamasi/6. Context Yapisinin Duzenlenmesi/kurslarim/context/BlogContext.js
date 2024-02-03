import React, { useState, useReducer, createContext } from "react";
import CreateDataContex from "./CreateDataContex";
 
 

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Vue js' }]

        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
  return()=>{
    dispatch({ type: 'add_blogpost' })

  }  
}

export const {Context,Provider}=CreateDataContex(blogReducer,{addBlogPost},[]);