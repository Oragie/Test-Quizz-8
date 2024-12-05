// Sélection du bouton par son ID
const button = document.getElementById("myButton");

// Ajout d'un observateur d'événement
button.addEventListener("click", () => {
  const body = document.querySelector("body");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";

  // Insérer le paragraphe après le bouton
  body.appenChild(paragraph);
});
