function clickRevealone() {
    var x = document.getElementById("projectsone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 


  function clickRevealtwo() {
    var x = document.getElementById("projectstwo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 



  function changeImage() {
    if (document.getElementById("eyeIcon").src == "icons\eye-closed3.svg"){
        document.getElementById("eyeIcon").src = "icons\show.svg";
    } else {
        document.getElementById("eyeIcon").src = "icons\eye-closed3.svg";
    }
}

function changeImage2() {
  if (document.getElementById("eyeIcon2").src == "icons\eye-closed3.svg"){
      document.getElementById("eyeIcon2").src = "icons\show.svg";
  } else {
      document.getElementById("eyeIcon2").src = "icons\eye-closed3.svg";
  }
}


/*const myImg = document.getElementById("eyeIcon");
const myButton = document.getElementById("projectdetail");

let isFirstImage = true;

myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "icons\eye-closed3.svg";
  } else {
    myImg.src = "icons\show.svg";
  }
  isFirstImage = !isFirstImage;
});*/