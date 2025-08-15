function removeMetaSection() {
    const metaSection = document.querySelector('.mt-6.flex.flex-col.gap-3');
    if (metaSection) {
        metaSection.remove();
    }
}