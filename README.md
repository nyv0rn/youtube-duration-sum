# YouTube Duration Sum – Browser Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Chrome extension that sums all video durations visible on a YouTube page (playlist, channel, search results, etc.) and displays the total in **HH:MM:SS** or **MM:SS** format.

<img width="1775" height="987" alt="image" src="https://github.com/user-attachments/assets/93de8d68-9407-4eb2-b5d9-b34c212061b4" />



## ✨ Features

- 🖱️ One‑click sum – just click the extension icon and press the button.
- 🧠 Smart parsing – automatically skips non‑duration badges like `"Course"`, `"Live"`, `"Premiere"`.
- 📦 Minimal permissions – only runs on `youtube.com` and reads the active tab.
- ⚡ Fast – runs entirely in your browser, no data sent anywhere.

## 🚀 Installation

### From source (developer mode)

1. Clone this repository or download the ZIP.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right toggle).
4. Click **Load unpacked** and select the extension folder.
5. The extension icon will appear in the toolbar.

### From the Chrome Web Store (coming soon)

*(Link will be added once published.)*

## 🧪 Usage

1. Navigate to any YouTube page that lists videos (e.g., a playlist, a channel's "Videos" tab, search results).
2. Click the extension icon in the toolbar.
3. Click the **"Sum all durations"** button.
4. The total duration will appear inside the popup.

> **Note:** Only videos currently loaded in the DOM are counted. Scroll down to load more if needed.

## 🛠️ How it works

The extension injects a small script into the YouTube page. It:
- Queries all elements with the class `ytBadgeShapeText` (YouTube's badge for durations).
- Parses each string (`HH:MM:SS` or `MM:SS` or `M:SS`).
- Converts each to seconds and sums them.
- Formats the result and returns it to the popup.

## 📁 File Structure

├── manifest.json – Extension manifest (MV3)

├── popup.html – The popup UI

├── popup.js – Popup logic + injected function

└── README.md – This file

### Prerequisites
- Chrome (or any Chromium‑based browser like Edge, Brave)

### Build / package
Just keep the three files – no build step needed. For distribution, you can zip the folder and upload to the Chrome Web Store.

## 🤝 Contributing

Pull requests are welcome! If you find a bug or have a suggestion, please open an issue.

## 📄 License

MIT © [nyv0rn]

## 🙏 Acknowledgements

- Inspired by the need to quickly check total watch time in YouTube playlists.
