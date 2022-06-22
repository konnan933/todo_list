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

var showIndex = 0;

function init() {
  QS(".beadas").addEventListener("click", putIn);
}

function putIn() {
  let txt = ID("szoveg").value;
  if (txt != "") {
    QS(
      ".show"
    ).innerHTML += `<div class="todo" id ="t${showIndex}"><p>${txt}</p>
    <div class='pipa${showIndex}' id ="${showIndex}">
       <div class="teteje"></div>
       <div class="alja"></div>
    </div>
    </div>`;
    $(".show").forEach((element) => {
      element.addEventListener("click", putOut);
    });
    showIndex++;
  }
}
function putOut() {
  id = event.target.id;
  ID("t" + id).remove();
}
