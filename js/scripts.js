/* NAV open and close */
/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

// Function to check screen width and open navigation if needed
function checkScreenWidth() {
  if (window.innerWidth >= 64 * 16) {
    // 64rem * 16px (1rem = 16px)
    openNav()
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the cover element
  var coverElement = document.querySelector(".cover")

  // Function to change z-index after the fade-in animation
  function changeZIndex() {
    coverElement.style.zIndex = -1 // Set the desired z-index value
  }

  // Add a timeout to apply the "fade-in" class after a delay
  setTimeout(function () {
    coverElement.classList.add("fade-in")

    // Add the transitionend event listener to trigger the z-index change
    coverElement.addEventListener("transitionend", changeZIndex)
  }, 500) // Adjust the delay as needed
})
/*

// Event listener for resize
window.addEventListener("resize", checkScreenWidth)

// Call the checkScreenWidth function on page load
checkScreenWidth()

document.addEventListener("DOMContentLoaded", function () {
  // Get the cover element
  var coverElement = document.querySelector(".cover")

  // Add the "fade-in" class to trigger the animation
  coverElement.classList.add("fade-in")
})
*/
