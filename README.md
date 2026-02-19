# Research Mouse Tracker
**Developed for ERP 2026 – University of Amsterdam**
*Project*: Information Behavior in Conversational Search Systems

This is a lightweight browser add-on for Chrome that records where people move their mouse and where they click during a usability session. When you're done, it generates a visual heatmap showing which parts of an interface captured the most attention.

---

## What Does It Do?

- Records mouse movements and clicks during a live session
- Works on **any website** — including tools you didn't build yourself
- Exports your data as a spreadsheet (CSV) you can open in Excel
- Generates a **heatmap image** overlaid on a screenshot of the page you tested
- Everything stays on your computer — nothing is sent anywhere

> **Note for academic writing:** Because this tracks cursor movement (not eyes), the correct term for papers is *cursor-based attention approximation*, not eye tracking.

---

## What You'll Need

- Google Chrome (free)
- Python installed on your computer (free) — [download here](https://www.python.org/downloads/)
- Jupyter Notebook (free) — comes with [Anaconda](https://www.anaconda.com/download), which is the easiest way to get it
- About 5 minutes to set everything up

---

## Installation

**Step 1 — Download the files**

Click the green **Code** button at the top of this page → **Download ZIP**

Unzip the folder and move it to your Desktop. Don't rename any files inside it.

**Step 2 — Add it to Chrome**

1. Open Chrome and go to: `chrome://extensions/`
2. Turn on **Developer Mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the folder you just downloaded

You'll see **Research Mouse Tracker** appear as a Chrome extension. That's it — you're ready.

---

## Running a Session

1. Open the website you want to test
2. Click the extension icon in Chrome's toolbar
3. Click **Start Tracking**
4. Conduct your session as normal
5. When finished, click **Stop** → **Export CSV**

The file will download automatically. It contains a timestamped log of every mouse movement and click, along with the page URL.

---

## Creating the Heatmap

**Step 1 — Take a screenshot of the page**

After your session, return to the tested page (same browser window, same size, same zoom level). Take a screenshot of **only the webpage content** — do not include the browser toolbar, address bar, or your desktop.

- On Mac: `Cmd + Shift + 4`, then drag to select just the page content
- On Windows: Use the Snipping Tool and select just the page content

Save the screenshot inside the folder you downloaded, and give it a simple name like `screenshot.png`.

**Step 2 — Open the notebook**

Open the file called `heatmap_visualization.ipynb` from the folder.

Find this line near the top:

```
IMG_PATH = "example_image.png" #Think the notebook currently shows 'notebooklm.png'
```

Change it to match your screenshot's filename:

```
IMG_PATH = "screenshot.png"
```

No other changes are needed.

**Step 3 — Run it**

Click **Run All**. The heatmap will appear over your screenshot automatically, and a high-resolution image file will be saved to the folder — ready to use in a report or paper.

---

## Tips for Accurate Results

The heatmap will only line up correctly if:

- You use **the same browser window size** for both recording and the screenshot
- Browser zoom is set to **100%**
- You take the screenshot on **the same monitor** you used during the session
- You don't scroll between recording and taking the screenshot

If the heatmap looks shifted, check these things first.

---

## License

For academic research use.
