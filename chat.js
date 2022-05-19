// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCPoj-QNI616qgWHwxn8Zj5Ij3e3509Jfo",
    authDomain: "lets-chat-web-app-70bae.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-70bae-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-70bae",
    storageBucket: "lets-chat-web-app-70bae.appspot.com",
    messagingSenderId: "73948961809",
    appId: "1:73948961809:web:910a06a76b62d5a0ffe5b0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   function addUser()
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("User_Name");

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



