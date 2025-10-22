// Time: update Date.now() every 500ms
const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  // set value to Date.now() (ms) - exactly what tests expect
  timeEl.textContent = String(Date.now());
}

updateTime();
setInterval(updateTime, 500);
