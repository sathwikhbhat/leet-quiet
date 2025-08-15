console.log("[INFO] LeetQuiet loaded. Starting distraction removal...");

function hideDistractions() {
  const path = window.location.pathname;
  const EXCLUDED_PATHS = ["/progress", "/progress/", "/discuss", "/discuss/"];
  const EXCLUDED_PREFIXES = ["/u/"];

  if (shouldSkipPage(path, EXCLUDED_PATHS, EXCLUDED_PREFIXES)) return;

  blockSolutionPage(path);
  removeTabs();
  replaceDifficultyLabels();
  removeDifficultyIndicators();
  removeDifficultyFilters();
}

document.addEventListener("DOMContentLoaded", () => {
  hideDistractions();
  initObserver(hideDistractions);
});