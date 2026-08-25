document.getElementById('sumBtn').addEventListener('click', () => {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Calculating...';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: sumDurations
    }, (results) => {
      if (chrome.runtime.lastError) {
        resultDiv.textContent = '⚠️ Error: ' + chrome.runtime.lastError.message;
        return;
      }
      if (results && results[0] && results[0].result) {
        resultDiv.textContent = '⏱️ ' + results[0].result;
      } else {
        resultDiv.textContent = '❌ No durations found.';
      }
    });
  });
});

// This function is injected into the page
function sumDurations() {
  let seconds = 0;

  for (const element of document.querySelectorAll('.ytBadgeShapeText')) {
    const timeString = element.textContent.trim();
    const parts = timeString.split(':').map(Number);

    // Skip if any part is NaN (e.g., "Course", "Live")
    if (parts.some(isNaN)) continue;

    if (parts.length === 3) {
      seconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      seconds += parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      seconds += parts[0];
    }
  }

  // Format the result
  const pad = (n) => String(n).padStart(2, '0');
  let formatted;

  if (seconds < 60) {
    formatted = `${seconds} second${seconds !== 1 ? 's' : ''}`;
  } else if (seconds < 3600) {
    formatted = `${Math.floor(seconds / 60)}:${pad(seconds % 60)}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainder = seconds % 3600;
    formatted = `${hours}:${pad(Math.floor(remainder / 60))}:${pad(remainder % 60)}`;
  }

  return formatted;
}
