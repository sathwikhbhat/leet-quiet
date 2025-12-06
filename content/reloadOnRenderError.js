(() => {
    const COOLDOWN_MS = 5000;
    let lastReload = 0;

    function checkAndReload() {
        if (!document.body?.innerText?.includes("Error rendering component")) 
            return;

        const now = Date.now();

        if (lastReload !== 0 && now - lastReload < COOLDOWN_MS) 
            return;

        console.log("[LeetQuiet] Error rendering component detected. Reloading...");
        lastReload = now;
        window.location.reload();
    }

    const observer = new MutationObserver(checkAndReload);

    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
        checkAndReload();
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            observer.observe(document.body, { childList: true, subtree: true });
            checkAndReload();
        });
    }
})();
