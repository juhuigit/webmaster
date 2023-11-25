  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC1Xz0neesevgIzDTXeWWbz3ubdAZaZj2s",
    authDomain: "fir-21e74.firebaseapp.com",
    databaseURL: "https://fir-21e74-default-rtdb.firebaseio.com",
    projectId: "fir-21e74",
    storageBucket: "fir-21e74.appspot.com",
    messagingSenderId: "309699130884",
    appId: "1:309699130884:web:ec720c1a5775b631fe2751",
    measurementId: "G-1LY8E064ZE"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);