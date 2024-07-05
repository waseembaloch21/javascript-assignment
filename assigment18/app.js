// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,  
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyD3rindrR2Y6ZxC9o4Sl0oQtwujE2Q_9jE",
  authDomain: "my-first-project-6f46d.firebaseapp.com",
  projectId: "my-first-project-6f46d",
  storageBucket: "my-first-project-6f46d.appspot.com",
  messagingSenderId: "191622749804",
  appId: "1:191622749804:web:8629ccf67fb1eb80280249",
  measurementId: "G-T4NJQCJ02L"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);



const signup_Email = document.getElementById("signup_Email")
const signup_Password = document.getElementById("signup_Password")
const signup_btn = document.getElementById("signup_btn")

const signIn_Email = document.getElementById("signIn_Email")
const signIn_Password = document.getElementById("signIn_Password")
const signIn_btn = document.getElementById("signIn_btn")

const auth_container = document.getElementById("auth_container")
const user_container = document.getElementById("user_container")

const user_email = document.getElementById("user_email")
const Logout_btn = document.getElementById("Logout_btn")


signup_btn.addEventListener("click", createUserAccount)
signIn_btn.addEventListener("click", signIn)
Logout_btn.addEventListener('click',logout)


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in");
    auth_container.style.display = "none"
    user_container.style.display = "block"
    user_email.style.color = "black"
    user_email.innerText += user.email;
    const uid = user.uid;
    
  } else {
    console.log('user is not logged in');
    auth_container.style.display = "block"
    user_container.style.display = "none"
  }
});

function createUserAccount() {
  // console.log(signup_Email.value);
  // console.log(signup_Password.value);

  createUserWithEmailAndPassword(auth, signup_Email.value, signup_Password.value)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
}

function signIn() {
  
signInWithEmailAndPassword(auth, signIn_Email.value, signIn_Password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

function logout() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
