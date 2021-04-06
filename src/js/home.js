console.log("Connected");

/* if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  const mobileMsg = document.querySelector(".msg");
  msg.innerHTML +
    "<p>If you're on mobile and it looks weird then go on a pc</p>";
} */

//Random background
const imagesClass = [
  "bg-image-duskpowerlines",
  "bg-image-fieldsunset",
  "bg-image-highsky",
  "bg-image-nightbay",
  "bg-image-nightcity",
  "bg-image-nighttrain",
  "bg-image-valley",
  "bg-image-personsunsetdew",

  /*   const images = [
    "/src/img/duskpowerlines.jpg",
    "/src/img/fieldsunset.jpg",
    "/src/img/highsky.jpg",
    "/src/img/nightbay.jpg",
    "/src/img/nightcity.jpg",
    "/src/img/nighttrain.jpg",
    "/src/img/valley.jpg",
    "/src/img/personsunsetdew1edit1.jpg",
  ]; */
];

const randomNumberBgImage = Math.floor(Math.random() * imagesClass.length);
const bgImage = imagesClass[randomNumberBgImage];
//console.log(bgImage);
//let bgImage = "url(" + images[randomNumber] + ")";
//document.getElementsByClassName("bg-image").style.backgroundImage = "bgImage";
const imgClass = document.getElementsByClassName("bg-image")[0];
//console.log(imgClass);

document.addEventListener("DOMContentLoaded", function () {
  imgClass.classList.add(bgImage);
});

//ssss
