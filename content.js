let mouseData = [];
let tracking = false;

chrome.storage.local.get("tracking", result => {
  tracking = result.tracking || false;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.tracking) {
    tracking = changes.tracking.newValue;
  }
});

// throttle movement recording
let lastMove = 0;

document.addEventListener("mousemove", (e) => {
  if (!tracking) return;

  if (performance.now() - lastMove < 50) return;
  lastMove = performance.now();

  mouseData.push({
    type: "move",
    x: e.clientX,
    y: e.clientY,
    t: Date.now(),
    url: window.location.href
  });

  chrome.storage.local.set({ mouseData });
});

document.addEventListener("click", (e) => {
  if (!tracking) return;

  mouseData.push({
    type: "click",
    x: e.clientX,
    y: e.clientY,
    t: Date.now(),
    url: window.location.href
  });

  chrome.storage.local.set({ mouseData });
});
