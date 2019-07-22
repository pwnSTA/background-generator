var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

function displayColorInfo() {
	css.textContent = body.style.background;
}

console.log(displayColorInfo);

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";
}


//Random color generator solution: https://stackoverflow.com/questions/1484506/random-color-generator?page=1&tab=votes#tab-top
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);

setRandomColor();


