var targetNumber = 700;
var counterElement = document.getElementById('counter');
var targetElement = document.getElementById('text-overlay');
var currentNumber = 0;
var countdownStarted = false;

function countToTarget() {
  if (currentNumber < targetNumber) {
    currentNumber++;
    counterElement.textContent = currentNumber;
    setTimeout(countToTarget, 300); // Adjust the duration (in milliseconds) between each increment
  }
}

function handleScroll() {
  var targetElementTop = targetElement.getBoundingClientRect().top;
  var viewportHeight = window.innerHeight;

  if (targetElementTop < viewportHeight && !countdownStarted) {
    countdownStarted = true;
    countToTarget();
  }
}

window.addEventListener('scroll', handleScroll);


window.addEventListener('scroll', handleScroll);

 function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "";
  document.getElementById("main").style.marginLeft= "0";
}
window.addEventListener('scroll', function() {
  var scrollUpButton = document.getElementById('scrollUpButton');
  if (window.pageYOffset > 100) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
});

document.getElementById('scrollUpButton').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
// JavaScript code to open a pop-up on icon click
var icons = document.getElementsByClassName('icon');

function openPopup() {
  // Code to open the pop-up or perform any desired action
  console.log('Pop-up opened!');
}

// Attach event listeners to each icon
Array.from(icons).forEach(function(icon) {
  icon.addEventListener('click', openPopup);
});
