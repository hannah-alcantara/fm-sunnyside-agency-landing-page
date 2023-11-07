// Get the icon button and dropdown content
const iconButton = document.querySelector(".icon-button");
const dropdownContent = document.querySelector(".dropdown-content");

// Add event listener to toggle the dropdown
iconButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    !iconButton.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    dropdownContent.classList.remove("show");
  }
});
