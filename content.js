function hideDistractions() {

    const solutionsTab = document.getElementById("solutions_tab")?.parentElement?.parentElement;
    const editorialTab = document.getElementById("editorial_tab")?.parentElement?.parentElement;

    if (solutionsTab && solutionsTab.style.display !== "none") {
        console.log("[INFO] Solutions tab detected. Hiding it...");
        solutionsTab.style.display = "none";
    }

    if (editorialTab && editorialTab.style.display !== "none") {
        console.log("[INFO] Editorial tab detected. Hiding it...");
        editorialTab.style.display = "none";
    }

    document.querySelectorAll(".flex.gap-1").forEach(element => {
        if ((element.textContent.includes("Easy") || element.textContent.includes("Medium") || element.textContent.includes("Hard")) && !element.innerHTML.includes("Your Brain > The Solution Tab")) {
            console.log("[INFO] Difficulty label found. Replacing with Motivational Quote.");
            element.innerHTML = `<div
                                    class="relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary cursor-pointer transition-colors
                                     hover:bg-fill-primary hover:text-text-primary text-sd-secondary-foreground hover:opacity-80">
                                    <span style="background: linear-gradient(90deg, #38ef7d, #11998e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">
                                        Your Brain &gt; The Solution Tab
                                    </span>
                                    <span style="font-weight: bold;">🧠🔥</span>
                                </div>`;
        }
    });

    if (window.location.pathname.includes("/solutions/")) {
        window.location.href = window.location.pathname.replace("/solutions/", "/description/");
        console.log("[WARNING] User attempted to access a solutions page.");
        console.log("[ACTION] Redirecting user from solutions to description page.");
        alert("No peeking at solutions! Redirecting you to the description...");
    }
    if (window.location.pathname.includes("/editorial/")) {
        window.location.href = window.location.pathname.replace("/editorial/", "/description/");
        console.log("[WARNING] User attempted to access an editorial page.");
        console.log("[ACTION] Redirecting user from editorial to description page.");
        alert("No peeking at editorials! Redirecting you to the description...");
    }

}

document.addEventListener('DOMContentLoaded', () => {
    hideDistractions();

    const observer = new MutationObserver(() => {
        hideDistractions();
    });

    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        console.error("document.body is not available for MutationObserver. This should not happen after DOMContentLoaded.");
    }

    const interval = setInterval(() => {
        hideDistractions();
        if (document.readyState === "complete") {
            clearInterval(interval);
            console.log("[INFO] Document is complete. Stopping distraction removal loop.");
        }
    }, 1);

});