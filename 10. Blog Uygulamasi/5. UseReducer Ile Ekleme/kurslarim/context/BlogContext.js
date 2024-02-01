import React, { useState, useReducer } from "react";

const BlockContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Vue js' }]

        default:
            return state;
    }
}

export const BlockProvider = ({ children }) => { 
    const [blockPosts, dispatch] = useReducer(blogReducer, [{ title: 'reactnative' }, { title: 'javascript' }])

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' }) 
    }
    return <BlockContext.Provider value={{ data: blockPosts, addBlogPost }}>{children}</BlockContext.Provider>

}

export default BlockContext;