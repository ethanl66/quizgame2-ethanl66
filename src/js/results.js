//HEIGHT OF BACKGROUND IMAGE SAME AS #HOME
const home = document.getElementById("home");
console.log(home);
const homeHeight = home.offsetHeight;
console.log(homeHeight);

const backgroundImage = document.getElementById("bg-image");
backgroundImage.style.height = homeHeight + "px";
backgroundImage.style.minHeight = "100%";
