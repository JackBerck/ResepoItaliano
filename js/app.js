document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".navigation-container").classList.toggle("active");
    console.log("oke")
  });

  document.querySelector("#getYear").innerHTML = new Date().getFullYear();