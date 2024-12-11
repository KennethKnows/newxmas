let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

const reminderContainer = document.querySelector('.reminder-container');
const maxDisplays = 10; // Show at least 10 times
let displayCount = 0;  // Counter for how many times the reminder has been shown

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds

// Function to update the time and date
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long', // Day of the week, e.g., 'Monday'
    year: 'numeric', // Full year
    month: 'long', // Full month name
    day: 'numeric', // Day of the month
    hour: '2-digit', // 12 or 24 hour format
    minute: '2-digit', // Always 2 digits for minutes
    second: '2-digit', // Always 2 digits for seconds
    hour12: true, // Set 12-hour format (AM/PM)
  };

  const formatter = new Intl.DateTimeFormat('en-US', {
    ...options,
    timeZone: 'Asia/Manila',
  });

  const timeString = formatter.format(now);
  document.getElementById('date-time').textContent = timeString;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Function to generate floating snowflakes
function generateSnowflakes() {
  const snowflakeContainer = document.querySelector('.floating-snowflakes');
  const numberOfSnowflakes = 50;  // Number of snowflakes to generate

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Randomize snowflake size
    const size = Math.random() * 10 + 5;  // Snowflakes between 5px and 15px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Random horizontal position (left offset)
    snowflake.style.left = `${Math.random() * 100}vw`;  // Random position across the width

    // Random animation duration for a more natural effect
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Between 5s to 10s for falling

    // Add the snowflake to the container
    snowflakeContainer.appendChild(snowflake);
  }
}

// Initialize the snowfall effect when the page loads
window.onload = () => {
  // Generate snowflakes
  generateSnowflakes();
};

// Countdown Timer to Christmas
function updateCountdown() {
  const christmasDate = new Date("December 25, 2024 00:00:00"); // Christmas Date
  const now = new Date();
  const timeDiff = christmasDate - now; // Time difference in milliseconds

  if (timeDiff <= 0) {
    document.getElementById("countdown-timer").textContent = "Merry Christmas!";
    return; // Stop the countdown once Christmas has passed
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Function to play the background audio on any click
function playAudio() {
  const audio = document.getElementById('background-audio');
  audio.play().catch((error) => {
    console.log("Autoplay failed: ", error);
  });
}

// Listen for any click on the document to start the audio
document.addEventListener('click', playAudio, { once: true });
