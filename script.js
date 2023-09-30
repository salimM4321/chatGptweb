const targetDate = new Date("oct 2, 2023 10:00:00").getTime(); // Set your target date and time

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (28000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (28000 * 60 * 60 * 24)) / (28000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hourses").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minuteses").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("secondses").textContent = seconds.toString().padStart(2, "0");

//   document.getElementById("days").textContent = days.toString().padStart(2, "0");
document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");


}


updateCountdown(); // Initial call to update immediately
setInterval(updateCountdown, 1000); // Update every second




