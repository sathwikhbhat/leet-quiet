<p align="center">
  <img src="icons/icon.png" alt="App Icon" width="150"/>
</p>

<h1 align="center">LeetQuite: Code Peacefully</h1>

<br>

**LeetQuite** is a lightweight browser extension for LeetCode that helps you stay focused by hiding spoilers like solutions and difficulty levels — encouraging you to think independently before seeking help.


## What does it do?

- **Hides the Solutions and Editorial tabs** on LeetCode problem pages. No more temptation to peek.
- **Conceals the difficulty label** (Easy, Medium, Hard) and replaces it with a motivational message.
- **Blocks direct access** to the solutions/editorials pages. If you try, it redirects you back with a warning.



<img width="400" height="200" alt="Before" src="https://github.com/user-attachments/assets/3571a21d-c963-4ac0-86c4-b0f1bc548e04" />
<img width="400" height="200" alt="After" src="https://github.com/user-attachments/assets/0d711d28-6cff-48bd-89fc-5ab83300a005" />

## Installation

1. Download or clone this repo.
2. Open Chrome (or any Chromium-based browser).
3. Go to `chrome://extensions/` in your address bar.
4. Enable **Developer mode**.
5. Click **Load unpacked** and select the folder containing this project.
6. That’s it! The extension is now active on LeetCode problem pages.

You can also drag and drop the folder directly into the extensions page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/786c30d7-72db-4997-9b0a-376ae86890f3" alt="LeetQuite Installation" width="500"/>
</p>


## How It Works

- Injects a script into LeetCode problem pages.
- After every 200 milliseconds, it checks for:
  - The **Solutions** and **Editorial** tabs and hides them.
  - The **difficulty label** and replaces it with a motivational message.
- If you visit a solutions/editorial page directly, it:
  - Automatically redirects you to the problem description.
  - Displays a short warning message.


## Permissions Required

LeetQuite only needs access to LeetCode problem pages.  
It **does not collect or transmit any data.**


## Contributing

Got an idea? Found a bug? Want to improve the extension?  
Feel free to open an issue or submit a pull request... All contributions are welcome!


<h3 align="center"><strong><em>Code with focus. Solve with clarity.</em></strong></h3>
