// mobile click function
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});


// on scroll image fade in transition js
function isInViewport(element, offset) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top + offset <= windowHeight && rect.bottom - offset >= 0;
}

function handleScroll() {
  var images = document.querySelectorAll(".fadeIn");

  images.forEach(function (image) {
    if (isInViewport(image, 100)) {
      setTimeout(function () {
        image.classList.add("fadeInAnimation");
      }, 150);
    }
  });

  var fadeUp = document.querySelectorAll(".fadeUp");
  fadeUp.forEach(function (item) {
    var delay = parseInt(item.getAttribute("data-animation-delay")) || 0;
    if (isInViewport(item, 100)) {
      setTimeout(function () {
        item.classList.add("fadeUpAnimation");
      }, delay);
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();


  // Select all menu items
  const menuItems = document.querySelectorAll('nav a');

  // Add click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      menuItems.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked item
      this.classList.add('active');
    });
  });