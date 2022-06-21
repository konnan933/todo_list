window.addEventListener("load", init);
function QS(elem) {
  return document.querySelector(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  QS(".beadas").addEventListener("click", putIn);
}

function putIn() {
  let txt = ID("szoveg").value;
  //kezelni kell ha üres az input
  QS(".show").innerHTML += `<div class="todo"><p>${txt}</p>
     <div class='pipa'>
        <div class="teteje"></div>
        <div class="alja"></div>
    </div>
  </div>`;
}
