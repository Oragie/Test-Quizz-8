document.addEventListener("DOMContentLoaded", () => {
  // Ajouter des labels aux champs du formulaire
  const nameInput = document.getElementById("name");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Nom :";
  nameInput.parentNode.insertBefore(nameLabel, nameInput);
  nameInput.setAttribute("aria-label", "Champ pour entrer votre nom");

  const emailInput = document.getElementById("email");
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Adresse e-mail :";
  emailInput.parentNode.insertBefore(emailLabel, emailInput);
  emailInput.setAttribute(
    "aria-label",
    "Champ pour entrer votre adresse e-mail"
  );

  // Ajouter aria-label au bouton
  const submitButton = document.querySelector("button");
  submitButton.setAttribute("aria-label", "Bouton pour envoyer le formulaire");

  // Ajouter un attribut alt et aria-label à l'image
  const image = document.querySelector("img");
  image.setAttribute("alt", "Illustration.");
  image.setAttribute("aria-label", "Illustration.");

  // Ajouter aria-label et title au lien en utilisant directement la propriété
  const link = document.querySelector("a");
  link.title = "Cliquez ici";
  link.setAttribute("aria-label", "Lien cliquez ici");
  link.textContent = "Cliquez ici";
});
