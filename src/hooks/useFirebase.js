import {
  getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
  createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword
} from "firebase/auth";
import { useState, useEffect } from "react";


import initializeFirebase from "../components/Home/Login/Firebase/firebase.init"
initializeFirebase();
const useFirebase = () => {
  const [ user, setUser ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleSignInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).finally(setIsLoading(false));
  };
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [ auth ]);
  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth, googleProvider)
      .then((res) => {
        setUser({});
      })
      .finally(setIsLoading(false));
  };
  const createUser = (name, email, password, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        const destination = location?.state?.from || "/";
        history(destination);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => { });
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history(destination);
      })
      .catch((error) => { })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    handleSignInUsingGoogle,
    handleLogOut,
    createUser,
    logInUser,
    isLoading,
  }
}

export default useFirebase