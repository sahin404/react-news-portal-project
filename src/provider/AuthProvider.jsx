import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState([]);

    const GoogleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const GitHubSignIn=()=>{
        return signInWithPopup(auth,gitHubProvider);
    }


    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // console.log(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const info={signUp, signIn,logOut,user,GoogleSignIn,GitHubSignIn}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;