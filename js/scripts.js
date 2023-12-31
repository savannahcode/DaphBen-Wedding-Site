/* NAV open and close */
/* Open */
let engagementBtn = document.querySelector(".engagements")
let bridalsBtn = document.querySelector(".bridals")
let weddingBtn = document.querySelector(".wedding")
let allPhotosBtn = document.querySelector(".all")
let photosDisplay = document.querySelector(".photosDisplay")

function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

window.addEventListener("resize", checkScreenWidth)
// Function to check screen width and open navigation if needed
function checkScreenWidth() {
  if (window.innerWidth >= 64 * 16) {
    // 64rem * 16px (1rem = 16px)
    openNav()
  } else {
    closeNav()
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
  }, 50) // Adjust the delay as needed
})

engagementBtn.addEventListener("click", handleEngagementClick)
bridalsBtn.addEventListener("click", handleBridalsClick)
weddingBtn.addEventListener("click", handleWeddingClick)
allPhotosBtn.addEventListener("click", handleAllPhotosClick)

function handleEngagementClick() {
  photosDisplay.innerHTML = ""
  for (let index = 1; index <= 166; index++) {
    let newImg = document.createElement("img")
    newImg.src = `images/daphne-ben-engagements/engagements${index}.jpg`
    photosDisplay.appendChild(newImg)
  }
}

function handleBridalsClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "Sorry! We don't have the Bridal pictures available yet. Please check back later."
  photosDisplay.appendChild(message)
}

function handleWeddingClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "Sorry! We don't have the Wedding pictures available yet, especially since the wedding doesn't take place till 11/17/2023. Please check back later."
  photosDisplay.appendChild(message)
}

function handleAllPhotosClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "Sorry! We only have the Engagement pictures so far, but here they all are!"
  handleEngagementClick()
  photosDisplay.appendChild(message)
}

/* SCROLL UP to top button code */
// Get the button:
let mybutton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// END of SCROLL UP Btn Functions
