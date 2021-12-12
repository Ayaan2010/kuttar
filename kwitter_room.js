var firebaseConfig = {
      apiKey: "AIzaSyAyGDnLCu8UsBSDxlJ61x1kRzqjoe7LYbo",
      authDomain: "kuitter-a196f.firebaseapp.com",
      databaseURL: "https://kuitter-a196f-default-rtdb.firebaseio.com",
      projectId: "kuitter-a196f",
      storageBucket: "kuitter-a196f.appspot.com",
      messagingSenderId: "10086553050",
      appId: "1:10086553050:web:a799f434b24f8540485ce3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function addRoom()
{
      room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName()this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kitter.html";
}
