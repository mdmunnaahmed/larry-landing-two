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

// tab script
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class and set opacity-0 for all tab contents
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('opacity-0');
            content.classList.remove('opacity-100');
            content.classList.add('hidden'); // Add hidden after fading out
        });

        // Add 'active' class to clicked tab and show corresponding content
        this.classList.add('active');
        const target = this.getAttribute('href');
        const content = document.querySelector(target);
        content.classList.remove('hidden'); // Remove hidden to make it visible
        setTimeout(() => {
            content.classList.remove('opacity-0');
            content.classList.add('opacity-100');
        }, 10); // Trigger opacity transition
    });
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



// Get elements
const openVideoButton = document.getElementById('openVideo');
const videoModal = document.getElementById('videoModal');
const closeModalButton = document.getElementById('closeModal');
const videoPlayer = document.getElementById('videoPlayer');

// Open the modal when button is clicked
openVideoButton.addEventListener('click', () => {
  videoModal.classList.add('active'); // Show the modal
  videoPlayer.play(); // Start video playback
});

// Close the modal when close button is clicked
closeModalButton.addEventListener('click', () => {
  videoModal.classList.remove('active'); // Hide the modal
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset video playback
});

// Close the modal if user clicks outside the video content
window.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
});
