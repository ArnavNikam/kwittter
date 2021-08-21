
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBK9E_oFhR5m2gl9S_2FoqEjHcd9Ac69oM",
      authDomain: "kwwitter-dda2b.firebaseapp.com",
      databaseURL: "https://kwwitter-dda2b-default-rtdb.firebaseio.com",
      projectId: "kwwitter-dda2b",
      storageBucket: "kwwitter-dda2b.appspot.com",
      messagingSenderId: "280628843700",
      appId: "1:280628843700:web:4297852af285e46335b3e1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      
}

