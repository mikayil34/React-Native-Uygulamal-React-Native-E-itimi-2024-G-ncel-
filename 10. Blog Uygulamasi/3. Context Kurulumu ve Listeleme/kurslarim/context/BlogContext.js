import React from "react";

const BlockContext = React.createContext();



export const BlockProvider = ({ children }) => {

    const blockPosts=[{title:'reactnative'},{title:'javascript'}]
    return <BlockContext.Provider value={blockPosts}>{children}</BlockContext.Provider>

}

export default BlockContext;