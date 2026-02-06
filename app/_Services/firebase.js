// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCblxtueiMkOPwA0LXJvWQaWYtUs8Qj3Pw",
  authDomain: "teste-52021.firebaseapp.com",
  projectId: "teste-52021",
  storageBucket: "teste-52021.firebasestorage.app",
  messagingSenderId: "843001377848",
  appId: "1:843001377848:web:36be0946c053eabcdd62cd"
};


//arquivos da produção 
/*const firebaseConfig = {
  apiKey: "AIzaSyBQovp5GY90w4qm27Sy5S-RWC87YxqXgcg",
  authDomain: "stock-manager-65834.firebaseapp.com",
  projectId: "stock-manager-65834",
  storageBucket: "stock-manager-65834.firebasestorage.app",
  messagingSenderId: "894567188308",
  appId: "1:894567188308:web:fb9593a9e81a721c4feac1",
  measurementId: "G-CBENPQDE8H"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);