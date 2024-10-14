for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (evt) {
  makeSound(evt.key);
  btnAnimation(evt.key);
});

function makeSound(currentKey) {
  var audio;
  switch (currentKey) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
  audio.play();
}

function btnAnimation(keyPress) {
  var activeKey = document.querySelector("." + keyPress);
  activeKey.classList.add("pressed");
  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 200);
}
