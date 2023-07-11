import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyDCoX9a_bQ2sFUBMgPChbFN1NbkwWossoA",
  authDomain: "chainraise-4256b.firebaseapp.com",
  projectId: "chainraise-4256b",
  storageBucket: "chainraise-4256b.appspot.com",
  messagingSenderId: "932002353769",
  appId: "1:932002353769:web:04a831375c50c521b388f8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (data, callback) => {
  signInWithPopup(auth, provider)
    .then((results) => {
      // console.log(results);
      const data = {
        displayName: results?.user?.displayName,
        email: results?.user?.email,
        provider: results?.providerId,
        photo: results?.user?.photoURL,
      };
      axios
        .post("http://localhost:5000/api/login/google", data)
        .then((result) => {
          // console.log("response from backend is  ");
          localStorage.setItem("authtoken", result.data.authtoken);
          console.log(result.data);
          callback(result.data?.success);
        });
    })
    .catch((err) => {
      // console.log(err);
      return err;
    });
};
