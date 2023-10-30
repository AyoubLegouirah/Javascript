/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        // Génération d'un nombre aléatoire entre 1 et 100
        const minNumber = 1;
        const maxNumber = 100;
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    
        let numberOfTries = 0;
    
        // Récupération de l'élément d'entrée utilisateur
        const userGuessInput = document.getElementById("user-guess");
    
        // Récupération de l'élément d'affichage des messages
        const messageDisplay = document.getElementById("message");
    
        // Récupération de l'élément du bouton de soumission
        const submitButton = document.getElementById("submit");
    
        // Ajout d'un écouteur d'événements pour le bouton de soumission
        submitButton.addEventListener("click", function () {
            // Récupération de la supposition de l'utilisateur
            const userGuess = parseInt(userGuessInput.value);
    
            // Vérification de la supposition de l'utilisateur
            if (isNaN(userGuess)) {
                messageDisplay.textContent = "Entrez un nombre valide.";
            } else {
                numberOfTries++;
    
                if (userGuess < randomNumber) {
                    messageDisplay.textContent = "Plus grand !";
                } else if (userGuess > randomNumber) {
                    messageDisplay.textContent = "Plus petit !";
                } else {
                    messageDisplay.textContent = `Félicitations ! Vous avez deviné le nombre en ${numberOfTries} essais.`;
                    submitButton.disabled = true;
                }
            }
        });
    });
    
})();