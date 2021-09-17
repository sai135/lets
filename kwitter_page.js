const firebaseConfig = {
    apiKey: "AIzaSyCUPjrLuWl8wNnjUaujKiIVEcZy0APCd_Y",
    authDomain: "let-s-chat-50a9c.firebaseapp.com",
    projectId: "let-s-chat-50a9c",
    storageBucket: "let-s-chat-50a9c.appspot.com",
    messagingSenderId: "476614401982",
    appId: "1:476614401982:web:ef5d1bf627e4865ecb23ef",
    measurementId: "G-K7PWE148CN"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
    }