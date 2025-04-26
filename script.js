function clickReveal() {
    var x = document.getElementById("projectsone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 


  function changeImage() {
    if (document.getElementById("eyeIcon").src == "icons/eye-closed3.svg"){
        document.getElementById("eyeIcon").src = "icons\show.svg";
    } else {
        document.getElementById("eyeIcon").src = "icons\eye-closed3.svg";
    }
}