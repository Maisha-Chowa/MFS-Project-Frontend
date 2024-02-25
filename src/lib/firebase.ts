import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlKaKoYR-RR6vkR1V49TMMsHvr-q-ylBU",
  authDomain: "book-catalog-c3ef8.firebaseapp.com",
  projectId: "book-catalog-c3ef8",
  storageBucket: "book-catalog-c3ef8.appspot.com",
  messagingSenderId: "15818810604",
  appId: "1:15818810604:web:5f69f7670e91342be671c9",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
