import React, { useState } from "react";

const BlockContext = React.createContext();



export const BlockProvider = ({ children }) => {
    const [blockPosts, setBlockPosts] = useState([{ title: 'reactnative' }, { title: 'javascript' }    ])
const addBlogPost=()=>{

    setBlockPosts([...blockPosts,{title:'Vue js'}])
}
    return <BlockContext.Provider value={{data:blockPosts,addBlogPost}}>{children}</BlockContext.Provider>

}

export default BlockContext;