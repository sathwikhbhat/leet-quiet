function removeDifficultyIndicators() {
  const difficultyIndicators = [
    ...document.querySelectorAll("p.text-sd-hard, p.text-sd-easy, p.text-sd-medium"),
    ...document.querySelectorAll("div.h-\\[5px\\].w-\\[5px\\].rounded-full"),
    ...document.querySelectorAll("p.text-lc-green-60, p.text-lc-yellow-60, p.text-lc-red-60"),
  ];
  if (difficultyIndicators.length > 0) {
    difficultyIndicators.forEach(el => el.remove());
    console.log("[INFO] Removed difficulty indicators.");
  }
}