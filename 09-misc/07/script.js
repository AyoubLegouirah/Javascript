/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        // Récupération de l'élément d'affichage du compteur
        const counterDisplay = document.getElementById("target");
    
        // Récupération de l'élément du bouton d'incrémentation
        const incrementButton = document.getElementById("increment");
    
        // Vérification si le compteur existe dans le localStorage
        if (localStorage.getItem("clickerCounter") !== null) {
            // Si le compteur existe, le récupérer et l'afficher
            const storedCounter = parseInt(localStorage.getItem("clickerCounter"));
            counterDisplay.textContent = storedCounter;
        }
    
        // Ajout d'un écouteur d'événements pour le bouton d'incrémentation
        incrementButton.addEventListener("click", function () {
            // Incrémentation du compteur
            let currentCounter = parseInt(counterDisplay.textContent) || 0;
            currentCounter++;
            counterDisplay.textContent = currentCounter;
    
            // Sauvegarde du compteur dans le localStorage
            localStorage.setItem("clickerCounter", currentCounter.toString());
        });
    });
    
})();