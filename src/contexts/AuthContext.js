import { createContext, useState } from 'react';
import { logginRoute } from '../constants/api_routes';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const loggin = (data) => { // the data that the rever needs 
        fetch(logginRoute, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' // TODO think how to be done secure the Accept header
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => setCurrentUser(user))
            .catch(err => console.log(err));
    }

    return (
        <AuthContext.Provider value={{ currentUser, loggin }}>
            {children}
        </AuthContext.Provider>
    );
}