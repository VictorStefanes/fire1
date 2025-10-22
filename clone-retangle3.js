document.addEventListener("DOMContentLoaded", () => {
    // Pega o template
    const template = document.getElementById("retangle3-template");
    if (!template) return;

    // Pega todas as seções
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        // Evita múltiplos clones
        if (section.querySelector('.retangle3-group')) return;
        // Clona o grupo do template
        const clone = template.content.firstElementChild.cloneNode(true);
        // Posiciona no canto inferior direito
        clone.style.position = 'absolute';
        clone.style.bottom = '0';
        clone.style.right = '0';
        clone.style.margin = '0';
        clone.style.padding = '0';
        section.appendChild(clone);
        // Garante que a seção tenha position: relative
        if (getComputedStyle(section).position === 'static') {
            section.style.position = 'relative';
        }
    });
});
