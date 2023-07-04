// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function handleHeartClick(event) {
  const heart = event.target;
  if (heart.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      })
      .catch((error) => {
        const modal = document.getElementById("error-modal");
        const errorMessage = document.getElementById("error-message");
        errorMessage.innerText = error;
        modal.classList.remove("hidden");
        setTimeout(function() {
          modal.classList.add("hidden");
        }, 3000);
      });
  } else {
    heart.innerText = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  }
}

// Add event listener to the hearts
const hearts = document.getElementsByClassName("like");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", handleHeartClick);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
