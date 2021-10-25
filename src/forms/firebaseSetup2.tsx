import {createContext, useContext, useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import  'firebase/auth';
require('firebase/auth');


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})


// @ts-ignore
const AuthContext = createContext<any>();

export const useAuth = (): any =>{
    return useContext(AuthContext)
}

function useProvideAuth() {
    const [user, setUser] = useState<any>();

    const signin = (email: string, password: string) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response:any) => {
                setUser(response.user);
                return response.user;
            });
    };
    const signup = (email: string, password: string) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response:any) => {
                setUser(response.user);
                return response.user;
            });
    };
    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user: any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);
    // Return the user object and auth methods
    return {
        user,
        signin,
        signup,
        signout
    };
}

export function ProvideAuth({ children }:any) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}