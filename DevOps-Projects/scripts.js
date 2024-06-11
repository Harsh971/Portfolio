// scripts.js
function showProjects(topic) {
  var containers = document.querySelectorAll('.project-container');
  containers.forEach(function(container) {
    container.style.display = 'none';
  });
  
  var selectedContainer = document.getElementById(topic);
  if (selectedContainer) {
    selectedContainer.style.display = 'flex';
  }
}

// scripts.js

// Show popup when "Read More" button is clicked
document.querySelectorAll('.read-more-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  });
});



// Hide popup when close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});

// Hide popup when user clicks outside of it
window.addEventListener('click', function(event) {
  var popup = document.getElementById('popup');
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});

window.onload = function() {
        document.getElementById('defaultbtn').click();
    };