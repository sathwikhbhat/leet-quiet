<p align="center">
  <img src="icons/icon.png" alt="LeetQuiet Icon" width="150"/>
</p>

<h1 align="center">LeetQuiet: Code with Focus. Not with Noise.</h1>


<p align="center">
  <a rel="noreferrer noopener" href="https://chrome.google.com/webstore/detail/fmmibmdiheablcolcljnihbdaliljfgf/" target="_blank">
    <img alt="Chrome Web Store" src="https://img.shields.io/badge/Chrome-4285f4.svg?&style=for-the-badge&logo=google-chrome&logoColor=white">
  </a>
  <a rel="noreferrer noopener" href="https://addons.mozilla.org/firefox/addon/leetquiet/" target="_blank">
    <img alt="Firefox Add-ons" src="https://img.shields.io/badge/Firefox-ff7139.svg?&style=for-the-badge&logo=firefox-browser&logoColor=white">
  </a>
</p>


<p align="center">
  <a href="https://github.com/sathwikhbhat/leet-quiet/releases">
    <img src="https://img.shields.io/github/v/release/sathwikhbhat/leet-quiet?style=for-the-badge&color=blue" alt="Latest Release"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/sathwikhbhat/leet-quiet/issues">
    <img src="https://img.shields.io/github/issues/sathwikhbhat/leet-quiet?style=for-the-badge&color=orange" alt="GitHub Issues"/>
  </a>
</p>


<p align="center">
  <a href="https://peerlist.io/sathwikhbhat/project/leetquiet" target="_blank" rel="noreferrer">
		<img src="https://github.com/user-attachments/assets/36232d80-8c05-4dc9-82a5-012b4bf86428" alt="LeetQuiet" style="width: auto; height: 72px;"/>
  </a>
</p>


**LeetQuiet** is a lightweight browser extension for LeetCode that helps you stay focused by hiding spoilers like  
**solutions** and **difficulty levels**, encouraging you to think independently before seeking help.


## Why Use LeetQuiet?

Solving LeetCode problems effectively requires focus, discipline, and a clear head.  
But let’s be real. Once your brain sees a big red **"Hard"**, it starts negotiating an exit plan.

**LeetQuiet removes distractions and spoiler temptations**, helping you:

- Avoid being intimidated by the difficulty tag. Just read the problem and start thinking.
- Think independently before peeking at solutions.
- Build strong problem-solving muscles through effort, not shortcuts.
- Practice like it’s a real interview. No hints, spoilers, or psychological traps.


## What Does It Do?

- **Hides the Solutions and Editorial tabs** on LeetCode problem pages.
- **Conceals the difficulty label** (Easy, Medium, Hard) and replaces it with a motivational message:  
  > *"Your Brain > The Solution Tab 🧠🔥"*
- **Removes all difficulty indicators** (colored dots, text, and filter/sort options) from the UI for a cleaner, spoiler-free experience.
- **Blocks direct access** to `/solutions` and `/editorial` URLs — shows a custom motivational "roast" page and a button to return to the problem.
- **Displays a toast notification** when the extension is updated, with a link to the changelog.

<p align="center">
  <img width="400" height="200" alt="Before using LeetQuiet" src="https://github.com/user-attachments/assets/3571a21d-c963-4ac0-86c4-b0f1bc548e04" />
  &nbsp;
  <img width="400" height="200" alt="After using LeetQuiet" src="https://github.com/user-attachments/assets/0d711d28-6cff-48bd-89fc-5ab83300a005" />
</p>


## Installation (Manual Method)

1. Download the latest `.zip` file from the [Releases](https://github.com/sathwikhbhat/leet-quiet/releases) section.  
   *(Look for a file like `leetQuiet-v1.2.0.zip`, not the source code ZIP.)*
2. Extract the `.zip` file to any folder.
3. Open Chrome (or any Chromium-based browser).
4. Go to `chrome://extensions/` in the address bar.
5. Enable **Developer mode** using the toggle in the top-right corner.
6. Click **Load unpacked** and select the extracted folder.
7. That’s it — LeetQuiet is now active on LeetCode problem pages!

Alternatively, drag and drop the folder directly into the Extensions page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/786c30d7-72db-4997-9b0a-376ae86890f3" alt="LeetQuiet Manual Installation Screenshot" width="500"/>
</p>


## How It Works

LeetQuiet runs automatically on all LeetCode problem pages and uses a **MutationObserver** to monitor DOM changes.

It:
- Hides the **Solutions** and **Editorial** tabs.
- Replaces the **difficulty label** ("Easy", "Medium", "Hard") with:  
  > *"Your Brain > The Solution Tab 🧠🔥"*
- Removes all difficulty indicators (colored dots, text, and filter/sort options) from the UI.
- Redirects users from `/solutions` or `/editorial` URLs to a custom motivational page with a button to return to the problem:
  > *"Trying to be smart, aah!? Looks like you're trying to peek at the solutions... but we both know growth comes from the grind 🧠💪"*
- Shows a toast notification when the extension is updated, with a link to the full changelog.


## Permissions Required

LeetQuiet only runs on `leetcode.com/*` and requires the `storage` permission to remember if you've seen the latest update notification.  
It does **not collect, store, or transmit** any personal data.


## Browser Compatibility

- **Chrome** (and all Chromium-based browsers)
- **Firefox** (minimum version 109, via browser-specific settings)


## Contributing

Have an idea? Found a bug?  
Open an issue or submit a pull request — contributions are very welcome!


## Privacy Policy

LeetQuiet does **not collect or transmit any personal data**.  
Read the full [Privacy Policy](https://gist.github.com/sathwikhbhat/19b14b3dab2cb7a78c5a550133b76ee0) for details.


<h3 align="center"><strong><em>Code with focus. Solve with clarity.</em></strong></h3>
