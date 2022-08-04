let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0;

setInterval( function() {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
}, 5000);

// btnPrev.addEventListener("click", () => {
//   pos += 90;
//   cube.style.transform = `rotateY(${pos}deg)`;
// });
