document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("retangle3-template");

    // Sem template, nao ha o que clonar.
    if (!template || !template.content.firstElementChild) {
        return;
    }

    const sections = document.querySelectorAll("section[data-retangle3-auto='true']");

    sections.forEach((section) => {
        const hasAnyRectangle = section.querySelector(
            ".retangle3-group, .retangle3-bottom, .retangle3-bottom-second, [class*='retangle3']"
        );

        // Evita duplicar grupos ja existentes na secao.
        if (hasAnyRectangle) {
            return;
        }

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.bottom = "0";
        clone.style.right = "0";
        clone.style.margin = "0";
        clone.style.padding = "0";

        if (getComputedStyle(section).position === "static") {
            section.style.position = "relative";
        }

        section.appendChild(clone);
    });
});
