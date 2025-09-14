// const volume = document.querySelector("#volume");

// volume.addEventListener("input", function () {
//   let val = (this.value - this.min) / (this.max - this.min) * 100;
//   this.style.background = `linear-gradient(to right, black ${val}%, #888 ${val}%)`;
// });
const slider = document.querySelector('input[type="range"]');

function updateFill() {
  const val = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--val", val + "%");
}

slider.addEventListener("input", updateFill);
updateFill(); // initialize
