function replaceDifficultyLabels() {
  document.querySelectorAll(
    ".flex.gap-1, div.relative.inline-flex.items-center.justify-center.text-caption.px-2.py-1.gap-1.rounded-full"
  ).forEach((element) => {
    const text = element.textContent;
    if (text.includes("Easy") || text.includes("Medium") || text.includes("Hard")) {
      element.style.visibility = "hidden";
      const isFlexGap = element.classList.contains("flex") && element.classList.contains("gap-1");
      if (isFlexGap) {
        element.innerHTML = quote;
        element.style.visibility = "visible";
      } else {
        const parent = element.parentElement;
        if (parent) {
          parent.innerHTML = quote;
          parent.style.visibility = "visible";
        }
      }
    }
  });
}