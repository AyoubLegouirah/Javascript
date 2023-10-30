/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Sélectionnez toutes les balises <p> avec la classe "target"
    const targetParagraphs = document.querySelectorAll("p.target");

    // Parcourez les balises et remplacez leur contenu par "owned"
    targetParagraphs.forEach(paragraph => {
        paragraph.textContent = "owned";
    });
})();
