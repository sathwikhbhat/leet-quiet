# LeetQuite: Code Peacefully

LeetQuite is a simple browser extension for LeetCode. It helps you avoid looking at solutions and problem difficulty, so you can try to solve problems on your own first.


## What does it do?

- **Hides the Solutions and Editorial tabs** on LeetCode problem pages. This means you won't see the answers or hints right away.
- **Hides the difficulty label** (Easy, Medium, Hard) and shows a short motivational message instead.
- **Stops you from opening solutions or editorials directly.** If you try to go to those pages, it will send you back to the problem description and show a message.


## How to install

1. Download or clone this project to your computer.
2. Open Chrome (or any Chromium-based browser).
3. Go to `chrome://extensions/` in the address bar.
4. Turn on "Developer mode" (top right corner).
5. Click "Load unpacked" and select the folder where you saved this project.
6. The extension should now be active when you visit LeetCode problem pages.


## How it works

- The extension runs a script on every LeetCode problem page.
- Every 200 milliseconds, it checks for the Solutions and Editorial tabs and hides them if they are there.
- It also looks for the difficulty label and replaces it with a motivational message.
- If you try to visit a solutions or editorial page directly, it will automatically send you back to the problem description and show a warning.


## Permissions

- The extension needs permission to run scripts on LeetCode problem pages. It does not collect or send any data.


## Icon

- The extension uses the icon found at `icons/icon.png` (128x128).


## Contributing

If you have ideas or want to help improve this extension, feel free to open an issue or make a pull request.


**Good luck, and try to solve problems on your own!**
