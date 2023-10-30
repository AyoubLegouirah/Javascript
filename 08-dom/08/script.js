/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", function() {
        var targetElement = document.getElementById("target");
        var table = document.createElement("table");
    
        for (var i = 1; i <= 10; i++) {
            var row = document.createElement("tr");
    
            for (var j = 1; j <= 10; j++) {
                var cell = document.createElement("td");
                cell.innerText = i + " x " + j + " = " + (i * j);
                row.appendChild(cell);
            }
    
            table.appendChild(row);
        }
    
        targetElement.appendChild(table);
    });
    
})();