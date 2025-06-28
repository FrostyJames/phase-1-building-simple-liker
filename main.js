// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Hide the error modal initially
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
modal.classList.add('hidden');

// Select all heart glyphs
const heartIcons = document.querySelectorAll('.like-glyph');

// Add click event listener to each heart
heartIcons.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart to liked
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          // Toggle heart back to unliked
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        // Show error modal with message
        modalMessage.textContent = error;
        modal.classList.remove('hidden');
        // Auto-hide modal after 3 seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
