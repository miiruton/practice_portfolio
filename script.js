

function clickReveal1() {
  var x = document.getElementById("projectsone");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function clickReveal2() {
  var x = document.getElementById("projectstwo");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




function clickReveal3() {
  var x = document.getElementById("projectsthree");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function changeImage1() {
  if (document.getElementById("eyeIcon").src == "icons/eye-closed3.svg") {
    document.getElementById("eyeIcon").src = "icons/show.svg";
  } else {
    document.getElementById("eyeIcon").src = "icons/eye-closed3.svg";
  }
}


function changeImage2() {
  var icon = document.getElementById("eyeIcon2");
  icon.classList.toggle('show-icon');
  icon.classList.toggle('hide-icon');
}

/*function changeImage2() {
  if (document.getElementById("eyeIcon2").src == "icons\eye-closed3.svg"){
      document.getElementById("eyeIcon2").src = "icons\show.svg";
  } else {
      document.getElementById("eyeIcon2").src = "icons\eye-closed3.svg";
  }
}*/

function changeImage3() {
  var icon = document.getElementById("eyeIcon3");
  icon.classList.toggle('fa-eye-slash');
  icon.classList.toggle('fa-eye');
}

/*function changeImage2() {
  if (document.getElementById("eyeIcon2").class == "fa-eye-slash"){
      document.getElementById("eyeIcon2").class = "fa-eye";
  } else {
      document.getElementById("eyeIcon2").class = "fa-eye-slash";
  }
}*/


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

