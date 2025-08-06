const openDropdown = document.getElementById("openStudyDropdown");
const closeDropdown = document.getElementById("closeStudyDropdown");
const hamCloseBtn = document.getElementById("hamCloseBtn");
const loginBtn = document.getElementById("loginBtn");
const dropDownMenu = document.querySelector(".dropDownMenu");

const originalHeader = document.getElementById("originalHeader");
const alternateHeader = document.getElementById("alternateHeader");
const dropdownOverlay = document.getElementById("dropDownStudy");
const navBottomOriginal = document.getElementById("navBottomOriginal");
const logoContainerOriginal = document.getElementById("logoContainerOriginal");

loginBtn.addEventListener("click", () => {
  if (dropDownMenu.style.display === "flex") {
    dropDownMenu.style.display = "none";
  } else {
    dropDownMenu.style.display = "flex";
  }
});

openDropdown.addEventListener("click", () => {
  originalHeader.style.display = "none";
  alternateHeader.style.display = "block";
  dropdownOverlay.classList.add("show");
  navBottomOriginal.style.display = "none";

  if (logoContainerOriginal) {
    logoContainerOriginal.classList.add("small");
  }
});

closeDropdown.addEventListener("click", () => {
  dropdownOverlay.classList.remove("show");
  alternateHeader.style.display = "none";
  originalHeader.style.display = "block";
  navBottomOriginal.style.display = "flex";

  if (logoContainerOriginal) {
    logoContainerOriginal.classList.remove("small");
  }
});

hamCloseBtn.addEventListener("click", () => {
  dropdownOverlay.classList.remove("show");
  alternateHeader.style.display = "none";
  originalHeader.style.display = "block";
  navBottomOriginal.style.display = "flex";

  if (logoContainerOriginal) {
    logoContainerOriginal.classList.remove("small");
  }
});
