document.getElementById("start").onclick = () => {
  chrome.storage.local.set({ tracking: true });
};

document.getElementById("stop").onclick = () => {
  chrome.storage.local.set({ tracking: false });
};

document.getElementById("export").onclick = () => {
  chrome.storage.local.get("mouseData", (result) => {
    const data = result.mouseData || [];

    if (!data.length) {
      alert("No data recorded.");
      return;
    }

    let csv = "timestamp,type,x,y,url\n";

    data.forEach(d => {
      csv += `${d.t},${d.type},${d.x},${d.y},${d.url}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
      url: url,
      filename: "mouse_tracking_data.csv"
    });
  });
};
