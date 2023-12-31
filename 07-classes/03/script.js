/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        static greeting = "";

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting = "Meow";
    }

    class Dog extends Animal {
        static greeting = "Woof";
    }

    document.getElementById("run").addEventListener("click", () => {
        const cat = new Cat("Whiskers");
        const dog = new Dog("Fido");

        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
})();
