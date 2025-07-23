<p align="center">
  <img src="icons/icon.png" alt="LeetQuite Icon" width="150"/>
</p>

<h1 align="center">LeetQuite: Code Peacefully</h1>


<p align="center">
  <a href="https://chrome.google.com/webstore/detail/fmmibmdiheablcolcljnihbdaliljfgf" target="_blank">
    <img src="https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png" alt="Get it on Chrome Web Store" height="80"/>
  </a>
</p>


<p align="center">
  <a href="https://github.com/sathwikhbhat/leet-quite/releases">
    <img src="https://img.shields.io/badge/version-1.1.0-blue.svg" alt="Version Badge"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/sathwikhbhat/leet-quite/issues">
    <img src="https://img.shields.io/github/issues/sathwikhbhat/leet-quite" alt="GitHub Issues Badge"/>
  </a>
</p>

**LeetQuite** is a lightweight browser extension for LeetCode that helps you stay focused by hiding spoilers like  
**solutions** and **difficulty levels**, encouraging you to think independently before seeking help.


## Why Use LeetQuite?

Solving LeetCode problems effectively requires focus, discipline, and a clear head.  
But let’s be real—once your brain sees a big red **"Hard"**, it starts negotiating an exit plan.

**LeetQuite removes distractions and spoiler temptations**, helping you:

- Avoid being intimidated by the difficulty tag. Just read the problem and start thinking.
- Think independently before peeking at solutions.
- Build strong problem-solving muscles through effort, not shortcuts.
- Practice like it’s a real interview. No hints, spoilers, or psychological traps.


## What Does It Do?

- **Hides the Solutions and Editorial tabs** on LeetCode problem pages.
- **Conceals the difficulty label** (Easy, Medium, Hard) and replaces it with a motivational message.
- **Blocks direct access** to `/solutions` and `/editorial` URLs — redirects you back with a warning.

<p align="center">
  <img width="400" height="200" alt="Before using LeetQuite" src="https://github.com/user-attachments/assets/3571a21d-c963-4ac0-86c4-b0f1bc548e04" />
  &nbsp;
  <img width="400" height="200" alt="After using LeetQuite" src="https://github.com/user-attachments/assets/0d711d28-6cff-48bd-89fc-5ab83300a005" />
</p>


## Installation (Manual Method)

1. Download the latest `.zip` file from the [Releases](https://github.com/sathwikhbhat/leet-quite/releases) section.  
   *(Look for a file like `leetQuite-v1.1.0.zip`, not the source code ZIP.)*
2. Extract the `.zip` file to any folder.
3. Open Chrome (or any Chromium-based browser).
4. Go to `chrome://extensions/` in the address bar.
5. Enable **Developer mode** using the toggle in the top-right corner.
6. Click **Load unpacked** and select the extracted folder.
7. That’s it — LeetQuite is now active on LeetCode problem pages!

Alternatively, drag and drop the folder directly into the Extensions page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/786c30d7-72db-4997-9b0a-376ae86890f3" alt="LeetQuite Manual Installation Screenshot" width="500"/>
</p>


## How It Works

LeetQuite runs automatically on all LeetCode problem pages and uses a **MutationObserver** to monitor DOM changes.

It:
- Hides the **Solutions** and **Editorial** tabs.
- Replaces the **difficulty label** ("Easy", "Medium", "Hard") with:  
  > *"Your Brain > The Solution Tab 🧠🔥"*
- Redirects users from `/solutions` or `/editorial` URLs back to the problem page with an alert:
  > *"No peeking at solutions! Redirecting you..."*


## Permissions Required

LeetQuite only runs on `leetcode.com/problems/*`.  
It does **not collect, store, or transmit** any data.


## Contributing

Have an idea? Found a bug?  
Open an issue or submit a pull request — contributions are very welcome!


## Privacy Policy

LeetQuite does **not collect or transmit any personal data**.  
Read the full [Privacy Policy](https://gist.github.com/sathwikhbhat/19b14b3dab2cb7a78c5a550133b76ee0) for details.


<h3 align="center"><strong><em>Code with focus. Solve with clarity.</em></strong></h3>
