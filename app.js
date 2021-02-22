VanillaTilt.init(document.querySelector(".container"), {
  max: 25,
  speed: 400,
  gyroscope: true,
  transition: true,
  perspective: 1000,
  scale: 1,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".container"));

const num = document.querySelectorAll(".num");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const inputBox = document.querySelector(".value");
const calc = document.querySelector(".calculator");
const text = document.querySelector(".text");
calc.addEventListener("mousemove", (e) => {
  console.log(e);
  circle.style.transition = "all .5s ease";
  circle.style.transform = "translateY(620px) scale(5)";
});

// animation out----

calc.addEventListener("mouseleave", (e) => {
  console.log(e);
  circle.style.transition = "all .5s ease";
  circle.style.transform = "translateY(0px)";
});

calc.addEventListener("mouseenter", (e) => {
  console.log(e);
  circle.style.transition = "all .5s ease";
});
