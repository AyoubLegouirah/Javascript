/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Classe Person avec les propriétés firstname et lastname
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get name() {
        return `${this.firstname} ${this.lastname}`;
    }

    set name(fullName) {
        const parts = fullName.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

document.getElementById("run").addEventListener("click", () => {
    // Crée une instance de la classe Person
    const person = new Person("John", "Doe");

    // Affiche la valeur de name dans la console
    console.log("Nom complet initial : " + person.name);

    // Affecte une nouvelle valeur à name et affiche l'état de l'instance
    person.name = "Alice Smith";
    console.log("Nouveau nom complet : " + person.name);
});
