(() => {
    const imageElement = document.querySelector("img");
    const nextButton = document.getElementById("next");

    // Créez un tableau avec les chemins des images du carousel
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg"
        // Ajoutez les chemins des autres images ici
    ];

    let currentImageIndex = 0;

    // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Image suivante"
    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % gallery.length;
        imageElement.src = gallery[currentImageIndex];
    });
})();
