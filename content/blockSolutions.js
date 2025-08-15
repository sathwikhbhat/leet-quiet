function blockSolutionPage(path) {
  if (path.includes("/solutions/") || path.includes("/editorial/")) {
    if (document.body.innerHTML.trim() !== roastHTML.trim()) {
      document.body.innerHTML = roastHTML;
    }
  }
}