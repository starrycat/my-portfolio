var button = document.getElementById("button1");
var aboutMe = document.getElementById("aboutMe");

function showHideAboutMe() {
  if (aboutMe.style.display === "none") {
    aboutMe.style.display = "block";
  } else {
    aboutMe.style.display = "none";
  }
  
}

button.onclick = showHideAboutMe;
