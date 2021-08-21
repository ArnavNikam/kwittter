function login() {
    username = document.getElementById("login_input").value;
    localStorage.setItem("login word", username);
    window.location = "kwitter_room.html";
}