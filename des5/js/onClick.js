function startAnimation() {
  let circle = document.getElementById('circle');
  let body = document.getElementById('body');
  let left = document.getElementById('left');
  let right = document.getElementById('right');

  body.style.overflow = "hidden";
  circle.style.marginTop = "100%";
  circle.style.transition = "3s";
  left.style.width = "0%";
  right.style.width = "0%";
  left.style.animationFillMode = "none";
  right.style.animationFillMode = "none";
  left.style.transition = "1s";
  right.style.transition = "1s";

  setTimeout(function() {
    toOtherPage();
  }, 1000);
}

function toOtherPage()  {
  window.location.replace("index2.html");
}
