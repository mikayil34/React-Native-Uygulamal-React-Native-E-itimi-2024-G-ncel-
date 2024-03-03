import { createContext, useState } from "react"


export const AuthContext = createContext({
    token: '',
    isAuthenticate: false,
    authenticete: (token) => { },
    logout: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null)
    function authenticete(token) { 
        setAuthToken(token);
    } 
    function logout(token) {
        setAuthToken(null);
    }
   
    const value = {
        token: authToken,
        isAuthenticate: !!authToken,
        authenticete: authenticete,
        logout: logout,

    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}

export default AuthContextProvider;