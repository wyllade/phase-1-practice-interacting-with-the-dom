let counter = 0;
let timerId;
let likes = {};  // Object to store the number of likes for each counter value

const timerDisplay = document.querySelector('#timer');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#like');
const likeDisplay = document.querySelector('#like-count');
const pauseButton = document.querySelector('#pause');
const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');
const commentList = document.querySelector('#comment-list');

// Start the timer
function startCounter() {
  timerId = setInterval(() => {
    counter++;
    timerDisplay.textContent = counter;
  }, 1000);
}

// Increment and decrement the counter
plusButton.addEventListener('click', () => {
  counter++;
  timerDisplay.textContent = counter;
});

minusButton.addEventListener('click', () => {
  counter--;
  timerDisplay.textContent = counter;
});

// "Like" the current counter number
likeButton.addEventListener('click', () => {
  if (!likes[counter]) {
    likes[counter] = 0;
  }
  likes[counter]++;
  likeDisplay.textContent = `${counter} has ${likes[counter]} like(s)`;
});

// Pause/Resume the counter
pauseButton.addEventListener('click', () => {
  if (pauseButton.textContent === 'Pause') {
    clearInterval(timerId);
    pauseButton.textContent = 'Resume';
    disableButtons(true);
  } else {
    startCounter();
    pauseButton.textContent = 'Pause';
    disableButtons(false);
  }
});

// Disable or enable buttons
function disableButtons(disable) {
  plusButton.disabled = disable;
  minusButton.disabled = disable;
  likeButton.disabled = disable;
}

// Handle comment submission
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = commentInput.value;
  if (comment) {
    const newComment = document.createElement('li');
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    commentInput.value = '';
  }
});

// Initialize timer when page loads
startCounter();
