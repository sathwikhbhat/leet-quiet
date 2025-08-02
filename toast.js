document.addEventListener('DOMContentLoaded', () => {
    // Version management for update notifications
    // Version: 1.3.0
    const CURRENT_VERSION = "1.3.0";

    // Fetch last shown version from storage
    const storage = chrome?.storage || browser?.storage;
    storage.local.get("lastShownVersion", ({ lastShownVersion }) => {
        if (lastShownVersion !== CURRENT_VERSION) {
            showUpdateToast(
                `LeetQuiet just got auto-updated to v${CURRENT_VERSION}`,
                "https://github.com/sathwikhbhat/leet-quiet/releases/tag/v1.3.0"
            );
            chrome.storage.local.set({ lastShownVersion: CURRENT_VERSION });
        }
    });

    // Function to display update toast
    function showUpdateToast(message, link) {
        const toast = document.createElement("div");
        toast.innerHTML = `
    <div class="toast-box" title="Click to view full changelog">
      <div class="toast-msg">🔥 ${message}</div>
      <p class="toast-link">Click to view the full changelog</p>
    </div>
  `;

        // On click, open the changelog in a new tab
        toast.onclick = () => window.open(link, "_blank");
        document.body.appendChild(toast);

        // Automatically remove toast after 10 seconds
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 300);
        }, 10000);
    }

    const style = document.createElement('style');
    style.innerHTML = `
  .toast-box {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateX(-50%);
    width: fit-content;
    z-index: 10000;
    text-align: center;
    cursor: pointer;

    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);

    font-size: 18px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;

    transition: all 0.3s ease-in-out;
    opacity: 0;
    animation: fadeInUp 0.5s forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

    .toast-link {
      font-size: 14px;
      color: #d1d5db;
      margin-top: 8px;
    }`;

    document.head.appendChild(style);

});