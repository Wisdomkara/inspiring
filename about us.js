const display = document.getElementById("#form");

display.addEventListener("submit", function (e) {
  e.preventDefault();
    e.stopPropagation();
  const pop = document.createElement("h1");
  pop.textContent = "thanks!!! you will receive a newsletter soon";
  display.appendChild(pop);
  pop.classList.add("formstyle");
});


toggleBtn = document.querySelector(".toggle_btn");
dropdown = document.querySelector(".dropdown_menu ");
const breakpoint = 768;

toggleBtn.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
// toggleBtn.addEventListener('click',function () {
//   if (dropdown.classList.contains('active')) {
//     dropdown.classList.remove('active')

//   }else{dropdown.classList.add('active')}
// })
function handleResize() {
  if (window.innerWidth >= breakpoint) {
    dropdown.classList.remove("active");
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);