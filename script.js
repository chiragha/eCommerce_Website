let menuList = document.getElementById("menuList");
let openIcon = document.getElementById("openIcon");
let closeIcon = document.getElementById("closeIcon");

menuList.style.maxHeight = "0px";
closeIcon.style.display = "none"; // hide close icon initially

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuList.style.maxHeight = "0px";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}
