/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function() {
        const pass = document.getElementById("pass-one");
        const validityIndicator = document.getElementById("validity");

        pass.addEventListener("input", function() {
            const passValue = pass.value;
            const charCount = passValue.length;
            const digitCount = (passValue.match(/\d/g) || []).length;

            if (charCount >= 8 && digitCount >= 2) {
                validityIndicator.textContent = "ok";
            } else {
                validityIndicator.textContent = "Pas ok";
            }
        });
    });
})();
