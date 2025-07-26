function hideDistractions() {
    // Redirects from forbidden pages
    const path = window.location.pathname;

    if ((path.includes("/solutions/") || path.includes("/editorial/")) && document.body.innerHTML.trim() !== roastHTML.trim()) {
        document.body.innerHTML = roastHTML;
    }

    // Remove solution/editorial tabs
    const tabsToRemove = [
        document.getElementById("solutions_tab")?.parentElement?.parentElement,
        document.getElementById("editorial_tab")?.parentElement?.parentElement
    ];
    tabsToRemove.forEach(tab => {
        if (tab instanceof HTMLElement) {
            console.log(`[INFO] Removing tab: ${tab.id}`);
            tab.remove();
        }
    });

    // Replace difficulty labels with motivational quotes
    document.querySelectorAll(".flex.gap-1").forEach(element => {
        const text = element.textContent;

        if ((text.includes("Easy") || text.includes("Medium") || text.includes("Hard"))) {
            console.log(`[INFO] Replacing difficulty label with: "Your Brain > The Solution Tab 🧠🔥"`);

            element.innerHTML = `
                                <div style="
                                  display: inline-block;
                                  padding: 4px 12px;
                                  border-radius: 9999px;
                                  font-weight: 600;
                                  color: white;
                                  font-size: 0.875rem;
                                  text-align: center;
                                  background: linear-gradient(to right, rgba(20, 184, 166, 0.9), rgba(99, 102, 241, 0.9));
                                    backdrop-filter: blur(4px);
                                ">
                                  Your Brain > The Solution Tab 🧠🔥
                                </div>
                                `;
        }
    });

    // Remove difficulty indicators
    const difficultyIndicators = [
        ...document.querySelectorAll('p.text-sd-hard, p.text-sd-easy, p.text-sd-medium'),
        ...document.querySelectorAll('div.h-\\[5px\\].w-\\[5px\\].rounded-full'),
        ...document.querySelectorAll('p.text-lc-green-60, p.text-lc-yellow-60, p.text-lc-red-60')
    ];
    if (difficultyIndicators.length > 0) {
        difficultyIndicators.forEach(el => el.remove());
        console.log("[INFO] Removed difficulty indicators.");
    }
}

// Main
console.log("[INFO] LeetQuiet loaded. Starting distraction removal...");

document.addEventListener('DOMContentLoaded', () => {
    hideDistractions();

    // Watch for SPA navigation changes
    const observer = new MutationObserver(() => {
        try {
            hideDistractions();
        } catch (err) {
            console.error("[ERROR] MutationObserver error:", err);
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// Roast HTML content
const roastHTML = `
  <style>
    .roast-container {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .roast-content {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
    }
    .roast-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.875rem;
      color: white;
      background-image: linear-gradient(to right, #f43f5e, #f97316);
      margin-bottom: 1rem;
    }
    .roast-heading {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .roast-text {
      font-size: 1.1rem;
      color: #cbd5e1;
    }
    .roast-button {
      margin-top: 2rem;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: bold;
      background: linear-gradient(to right, #14b8a6, #4ade80);
      color: white;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .roast-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(20, 184, 166, 0.6);
    }
  </style>

  <div class="roast-container">
    <div class="roast-content">
      <div class="roast-badge">Access Denied 😏</div>
      <h1 class="roast-heading">Trying to be smart, aah!?</h1>
      <p class="roast-text">
        Looks like you're trying to peek at the solutions... but we both know growth comes from the grind 🧠💪
      </p>
      <button onclick="window.history.back()" class="roast-button">
        Take me back to the problem!
      </button>
    </div>
  </div>
`;