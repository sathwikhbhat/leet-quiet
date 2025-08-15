function removeTabs() {
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
}
