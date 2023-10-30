/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    const imageElement = document.querySelector("img");
    const dataHover = imageElement.getAttribute("data-hover");
    const originalSrc = imageElement.getAttribute("src");
    
    imageElement.addEventListener("mouseover", () => {
        imageElement.src = dataHover;
    });
    
    imageElement.addEventListener("mouseout", () => {
        imageElement.src = originalSrc; // Utilisez la source d'origine stockée dans la variable
    });
})();
    

