import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react"


export const AuthContext = createContext({
    token: '',
    isAuthenticate: false,
    authenticete: (token) => { },
    logout: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null)

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                setAuthToken(storedToken);
            }
        }
        fetchToken();

    }, [])

    function authenticete(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
    }
    function logout(token) {
        setAuthToken(null);
        AsyncStorage.removeItem('token')
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