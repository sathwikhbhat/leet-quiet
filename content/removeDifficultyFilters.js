function removeDifficultyFilters() {
  const targets = Array.from(document.querySelectorAll("div")).filter((div) => div.textContent.trim() === "Difficulty");
  targets.forEach((d) => {
    const clickableBlock = d.closest(".flex.cursor-pointer.items-center.justify-between");
    const outerBlock = clickableBlock?.parentElement;
    if (outerBlock) outerBlock.remove();
  });

  document.querySelectorAll("div.flex.w-full.items-center.gap-2.pl-1")
    .forEach((div) => {
      if (div.innerText.includes("Difficulty")) {
        div.remove();
      }
    });
}