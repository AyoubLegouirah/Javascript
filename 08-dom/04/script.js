/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var sourceElement = document.getElementById("source");

    var imageData = sourceElement.getAttribute("data-image");

    var imgElement = document.createElement("img");
    imgElement.src = imageData;

    var targetImage = document.getElementById("target");

    targetImage.appendChild(imgElement);

    sourceElement.parentNode.removeChild(sourceElement);

})();


