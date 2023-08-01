const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  //YOUR FIREBASE PROJECT CONFIG HERE
  apiKey: "AIzaSyBtzI7_hsKwA2-RCkStwZfMgYAwy8-OF4E",
  authDomain: "mini-project-e0eed.firebaseapp.com",
  databaseURL:
    "https://mini-project-e0eed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-project-e0eed",
  storageBucket: "mini-project-e0eed.appspot.com",
  messagingSenderId: "950486628450",
  appId: "1:950486628450:web:94a6bbff2d655e1b2b793b",
};

const firebaseapp = initializeApp(firebaseConfig);

module.exports = firebaseapp;
