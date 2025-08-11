# Contributing to LeetQuiet

Thank you for your interest in contributing to **LeetQuiet**!
This project is built to help people stay focused while solving problems on LeetCode by hiding distracting elements. Contributions are welcome, whether it's fixing a bug, adding a new feature, or improving documentation.

## How to Contribute

### 1. Fork and Clone

```bash
# Fork this repository (via GitHub UI)
# Then clone your fork
git clone https://github.com/<your-username>/leet-quiet.git
cd leet-quiet
```

### 2. Set Up the Extension Locally

1. Open Chrome/Edge and go to `chrome://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the project folder.
4. The extension will now appear in your extensions list.
   If you make changes to the code, click **Reload** on the extension page.

### 3. Make Your Changes

* Follow the existing **code style**:
  * JavaScript: Use `const`/`let`, avoid global variables, write clean functions.
  * CSS: Keep selectors scoped to avoid conflicts with LeetCode styles.
  * Keep Manifest JSON valid and minimal.
* Keep PRs focused — small, clear changes are easier to review.
* Add comments for non-obvious logic.

### 4. Test Before Submitting

* Test on multiple problem pages (easy/medium/hard).
* Test both **dark mode** and **light mode** on LeetCode.
* Ensure performance is not degraded (extension should remain snappy).

### 5. Commit and Push

```bash
git checkout -b feature/your-feature-name
git commit -m "Add: short description of your change"
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

* Go to your fork on GitHub and click **Compare & pull request**.
* Clearly describe **what** you changed and **why**.
* If applicable, attach screenshots or GIFs.


## Areas to Contribute

* **Bug fixes** — Found something not working? Let’s fix it.
* **Feature requests** — Hiding more distractions, adding toggles, etc.
* **Performance improvements** — Optimising DOM selectors and script loading.
* **UI/UX tweaks** — Making the interface cleaner and more intuitive.
* **Documentation** — Improving this file or adding guides.


## Code of Conduct

Please be respectful and constructive. We’re here to build something helpful for the community.


## Need Help?

* Open an issue in the GitHub repository.
* Clearly describe your problem, steps to reproduce, and environment (browser/version).
