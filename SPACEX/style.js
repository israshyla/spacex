const sections = document.querySelectorAll("div[id^='section']");
let currentSectionIndex = 0;

function scrollToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToFirstSection() {
    currentSectionIndex = 0;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
}
