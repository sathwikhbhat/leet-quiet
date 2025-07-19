<p align="center">
  <img src="icons/icon.png" alt="App Icon" width="150"/>
</p>

<h1 align="center">LeetQuite: Code Peacefully</h1>

<p align="center">
  <a href="https://github.com/sathwikhbhat/leet-quite/releases">
    <img src="https://img.shields.io/badge/version-1.1.0-blue.svg" alt="Version Badge"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/sathwikhbhat/leet-quite/issues">
    <img src="https://img.shields.io/github/issues/sathwikhbhat/leet-quite" alt="GitHub Issues Badge"/>
  </a>
</p>

<br>

**LeetQuite** is a lightweight browser extension for LeetCode that helps you stay focused by hiding spoilers like
solutions and difficulty levels, encouraging you to think independently before seeking help.

## Why Use LeetQuite?

Solving LeetCode problems effectively requires focus, discipline, and a clear head.
But let's be real, the moment you see a big red **"Hard"** label, your brain starts negotiating an exit plan.

LeetQuite removes distractions and spoiler temptations, helping you:

- Avoid being intimidated by difficulty tag. Just read the problem and start thinking
- Think independently before peeking at solutions
- Build strong problem-solving muscles through effort, not shortcuts
- Practice like you interview. No hints, spoilers, or psychological traps

## What does it do?

- **Hides the Solutions and Editorial tabs** on LeetCode problem pages. No more temptation to peek.
- **Conceals the difficulty label** (Easy, Medium, Hard) and replaces it with a motivational message.
- **Blocks direct access** to the solutions/editorials pages. If you try, it redirects you back with a warning.

<img width="400" height="200" alt="Before" src="https://github.com/user-attachments/assets/3571a21d-c963-4ac0-86c4-b0f1bc548e04" />
<img width="400" height="200" alt="After" src="https://github.com/user-attachments/assets/0d711d28-6cff-48bd-89fc-5ab83300a005" />

## Installation

1. Download the latest `.zip` file from the [Releases](https://github.com/sathwikhbhat/leet-quite/releases) section.  
   *(Look for a file like `leetQuite-v1.1.0.zip`, not the source code files.)*
2. Extract the `.zip` file to any folder on your computer.
3. Open Chrome (or any Chromium-based browser).
4. Navigate to `chrome://extensions/` in the address bar.
5. Enable **Developer mode** using the toggle in the top-right corner.
6. Click **Load unpacked** and select the folder where you extracted the extension.
7. That’s it! LeetQuite is now active and will run automatically on LeetCode problem pages.

You can also drag and drop the folder directly into the extensions page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/786c30d7-72db-4997-9b0a-376ae86890f3" alt="LeetQuite Installation" width="500"/>
</p>

## How It Works

- Automatically runs on **LeetCode problem pages**.
- Uses a **MutationObserver** to detect and hide distractions in real-time:
  - Hides the **Solutions** and **Editorial** tabs if they appear.
  - Replaces the **difficulty label** ("Easy", "Medium", "Hard") with a motivational message:  
    *"Your Brain > The Solution Tab 🧠🔥"*
- If the user tries to visit a **solutions** or **editorial** page directly:
  - They are **redirected** back to the problem description.
  - A short alert is shown: *"No peeking at solutions! Redirecting you..."*

## Permissions Required

LeetQuite only needs access to LeetCode problem pages.  
It **does not collect or transmit any data.**

## Contributing

Got an idea? Found a bug? Want to improve the extension?  
Feel free to open an issue or submit a pull request... All contributions are welcome!

## Privacy Policy

LeetQuite does not collect or transmit any personal data.
You can read the full [Privacy Policy](https://gist.github.com/sathwikhbhat/19b14b3dab2cb7a78c5a550133b76ee0) for more
details.

<h3 align="center"><strong><em>Code with focus. Solve with clarity.</em></strong></h3>