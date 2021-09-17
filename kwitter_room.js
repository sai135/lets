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

function addRoom() {
Room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
  purpose:"adding Room name"
});

localStorage.setItem("room_name");
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room_name"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}

getData();
function redirectoroomname(name) {
console.log(name);
localStorage.setItem("room_name");
window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
window.location="kwitter.html";
localStorage.removeItem("room_name");
window.location="kwitter.html";
}
