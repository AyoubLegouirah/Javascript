/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const target = document.getElementById("target");
        const partOneButton = document.getElementById("part-one");
        const partTwoButton = document.getElementById("part-two");
        const partThreeButton = document.getElementById("part-three");
        const partFourButton = document.getElementById("part-four");
    
        let partOneValue = parseInt(partOneButton.textContent);
        let partTwoValue = parseInt(partTwoButton.textContent);
        let partThreeValue = parseInt(partThreeButton.textContent);
        let partFourValue = parseInt(partFourButton.textContent);
    
        function updatePhoneNumber() {
            const phoneNumber = `+${partOneValue}${partTwoValue}${partThreeValue}${partFourValue}`;
            target.textContent = phoneNumber;
        }
    
        partOneButton.addEventListener("click", function () {
            partOneValue = (partOneValue % (parseInt(partOneButton.dataset.max) + 1)) + parseInt(partOneButton.dataset.min);
            partOneButton.textContent = partOneValue.toString().padStart(3, "0");
            updatePhoneNumber();
        });
    
        partTwoButton.addEventListener("click", function () {
            partTwoValue = (partTwoValue % (parseInt(partTwoButton.dataset.max) + 1)) + parseInt(partTwoButton.dataset.min);
            partTwoButton.textContent = partTwoValue.toString().padStart(2, "0");
            updatePhoneNumber();
        });
    
        partThreeButton.addEventListener("click", function () {
            partThreeValue = (partThreeValue % (parseInt(partThreeButton.dataset.max) + 1)) + parseInt(partThreeButton.dataset.min);
            partThreeButton.textContent = partThreeValue.toString().padStart(2, "0");
            updatePhoneNumber();
        });
    
        partFourButton.addEventListener("click", function () {
            partFourValue = (partFourValue % (parseInt(partFourButton.dataset.max) + 1)) + parseInt(partFourButton.dataset.min);
            partFourButton.textContent = partFourValue.toString().padStart(2, "0");
            updatePhoneNumber();
        });
    
        // Initialisation de l'affichage du numéro de téléphone
        updatePhoneNumber();
    });
    
})();