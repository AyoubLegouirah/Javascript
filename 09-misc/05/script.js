/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const target = document.getElementById("target");
        const partOneInput = document.getElementById("part-one");
        const partTwoInput = document.getElementById("part-two");
        const partThreeInput = document.getElementById("part-three");
        const partFourInput = document.getElementById("part-four");
    
        const fixPartOneButton = document.getElementById("fix-part-one");
        const fixPartTwoButton = document.getElementById("fix-part-two");
        const fixPartThreeButton = document.getElementById("fix-part-three");
        const fixPartFourButton = document.getElementById("fix-part-four");
    
        let partOneValue = parseInt(partOneInput.value);
        let partTwoValue = parseInt(partTwoInput.value);
        let partThreeValue = parseInt(partThreeInput.value);
        let partFourValue = parseInt(partFourInput.value);
    
        let interval;
    
        function startSlot(input, minValue, maxValue) {
            clearInterval(interval);
            interval = setInterval(() => {
                input.value = padNumber(Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
            }, 100);
        }
    
        function stopSlot(input) {
            clearInterval(interval);
            input.value = padNumber(parseInt(input.value));
        }
    
        function padNumber(number) {
            return number.toString().padStart(2, "0");
        }
    
        fixPartOneButton.addEventListener("click", function () {
            stopSlot(partOneInput);
        });
    
        fixPartTwoButton.addEventListener("click", function () {
            stopSlot(partTwoInput);
        });
    
        fixPartThreeButton.addEventListener("click", function () {
            stopSlot(partThreeInput);
        });
    
        fixPartFourButton.addEventListener("click", function () {
            stopSlot(partFourInput);
        });
    
        partOneInput.addEventListener("input", function () {
            partOneValue = parseInt(partOneInput.value);
        });
    
        partTwoInput.addEventListener("input", function () {
            partTwoValue = parseInt(partTwoInput.value);
        });
    
        partThreeInput.addEventListener("input", function () {
            partThreeValue = parseInt(partThreeInput.value);
        });
    
        partFourInput.addEventListener("input", function () {
            partFourValue = parseInt(partFourInput.value);
        });
    
        // Initialisation de l'affichage du numéro de téléphone
        function updatePhoneNumber() {
            const phoneNumber = `+${partOneInput.value}${partTwoInput.value}${partThreeInput.value}${partFourInput.value}`;
            target.textContent = phoneNumber;
        }
    
        // Affichage initial
        updatePhoneNumber();
    });
    
})();