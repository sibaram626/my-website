const navbar = document.getElementById("navbar");

navbar.addEventListener("mouseover", function() {
  this.style.animation = "flashing 0.5s infinite";
});

navbar.addEventListener("mouseout", function() {
  this.style.animation = "";
});
