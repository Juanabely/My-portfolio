// Get the home link and attach a click event listener
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Slide the home section to the middle
    document.querySelector('.home').classList.toggle('slideMiddle');
  
    // Slide the rest of the nav bar elements
    var navLinks = document.querySelectorAll('#nav ul li:not(:first-child)');
    navLinks.forEach(function(link) {
      link.classList.toggle('slideRest');
    });
  });
  