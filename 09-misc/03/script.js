/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.getElementById("slider");
        const phoneNumber = document.getElementById("target");
    
        // Écoutez l'événement "input" sur le curseur (slider).
        slider.addEventListener("input", function () {
            const sliderValue = slider.value;
            phoneNumber.textContent = `+${sliderValue}`;
        });
    });
    
})();