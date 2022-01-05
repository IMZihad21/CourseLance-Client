import { initializeApp } from "firebase/app";

const config = process.env.REACT_APP_FIREBASE_CONFIG;
const firebaseConfig = JSON.parse(config);

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;