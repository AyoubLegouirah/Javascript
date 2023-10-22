/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function changementDate() {
        const date = new Date();
        const heures = date.getHours();

        if (heures < 18) {
            console.log("Bonjour");
        } else {
            console.log("Bonsoir");
        }
    }

    changementDate();
})();