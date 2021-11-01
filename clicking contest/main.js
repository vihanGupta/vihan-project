    
var firebaseConfig = {
    apiKey: "AIzaSyABCuZVbpF_uZgdZB9OZODoD8_ISqR7_HM",
    authDomain: "cliking-tactic.firebaseapp.com",
    databaseURL: "https://cliking-tactic-default-rtdb.firebaseio.com",
    projectId: "cliking-tactic",
    storageBucket: "cliking-tactic.appspot.com",
    messagingSenderId: "540355242691",
    appId: "1:540355242691:web:dc6ccd1603d62f19089076",
    measurementId: "G-BM9KCQDT17"
  };
  
  // Initialize Firebase
  firbase.initializeApp(firebaseConfig);

clickCounter = 0; 

function hello()
{
    user_name = localStorage.getItem("user_name");

    clickCounter = clickCounter + 1;
    document.getElementById("click_counter").innerHTML = "<label id='num'>"+clickCounter+"</label>"
    document.getElementById("user_name").innerHTML = "<label id='lopp'>"+user_name+"</label>";

    click_counter = document.getElementById("num").value;
    firebase.database().ref(user_name).push({
        name: user_name,
        clicks: click_counter
    });
}

function getdata()
{
    { firebase.database().ref("/"+user_name).on('value', function(snapshot)
    { document.getElementById("num").innerHTML = "";
     snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_clicking_id = childKey;
          clicking_data = childData;
          //Start code
console.log(firebase_clicking_id);
console.log(clicking_data);
name = clicking_data['name'];
clicking = clicking_data['clicks'];
row = name + clicking;

document.getElementById("output").innerHTML = row;
}}}}}
          getdata()  