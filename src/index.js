import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDq-mvDCiW3g2oGObJ-vPW1uLeTGe1Frko",
  authDomain: "proyecto-react-coderhous-f3146.firebaseapp.com",
  projectId: "proyecto-react-coderhous-f3146",
  storageBucket: "proyecto-react-coderhous-f3146.appspot.com",
  messagingSenderId: "179313154553",
  appId: "1:179313154553:web:eabf408595daf011480528"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

