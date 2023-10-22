/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {

    function findSpookyFridays(year) {
        const spookyMonths = [];

        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 13);

            if (date.getDay() === 5) {
                const monthNames = [
                    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                ];
                spookyMonths.push(monthNames[month]);
            }
        }

        return spookyMonths;
    }

    document.getElementById("run").addEventListener("click", function() {
        const year = parseInt(document.getElementById("year").value);

        const result = findSpookyFridays(year);

        if (result.length > 0) {
            alert(`Mois contenant un vendredi 13 en ${year} : ${result.join(", ")}`);
        } else {
            alert(`Aucun mois contenant un vendredi 13 en ${year}.`);
        }
    });

    
})();
