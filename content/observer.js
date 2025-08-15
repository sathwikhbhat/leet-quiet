function initObserver(callback) {
  const observer = new MutationObserver(() => {
    try {
      callback();
    } catch (err) {
      console.error("[ERROR] MutationObserver error:", err);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}