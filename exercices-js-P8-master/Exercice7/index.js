function convertToBinary() {
  // Récupérer l'entrée de l'utilisateur
  const decimalInput = document.getElementById("decimalInput").value;
  // Vérifier si l'entrée est un nombre entier positif (valide)
  let isValid = true;
  let decimalNumber = 0;
  // Vérification de l'entrée manuellement
  for (let i = 0; i < decimalInput.length; i++) {
    if (decimalInput[i] < "0" || decimalInput[i] > "9") {
      isValid = false; // Si un caractère n'est pas un chiffre
      break;
    }
  }
  // Si l'entrée n'est pas valide (soit non numérique, soit vide)
  if (!isValid || decimalInput === "") {
    document.getElementById("binaryResult").textContent = ""; // Afficher un résultat vide
    return;
  }
  // Conversion de la chaîne en nombre entier
  for (let i = 0; i < decimalInput.length; i++) {
    decimalNumber = decimalNumber * 10 + (decimalInput[i] - "0"); // Convertir chaque caractère en chiffre
  }
  // Vérifier si le nombre est négatif (ce qui n'est pas autorisé)
  if (decimalNumber < 0) {
    document.getElementById("binaryResult").textContent = ""; // Afficher un résultat vide
    return;
  }
  // Cas particulier pour 0
  if (decimalNumber === 0) {
    document.getElementById("binaryResult").textContent = "Binaire: 0";
    return;
  }
  // Variable pour stocker le résultat binaire
  let binary = "";
  // Conversion du nombre décimal en binaire
  while (decimalNumber > 0) {
    let remainder = decimalNumber % 2; // Calcul du reste de la division par 2
    binary = remainder + binary; // Ajouter le reste au début du binaire
    decimalNumber -= remainder; // Retirer le reste
    decimalNumber /= 2; // Diviser le nombre par 2
    if (decimalNumber < 1) break; // Terminer si le nombre devient inférieur à 1
  }

  // Affichage du résultat binaire
  document.getElementById("binaryResult").textContent = "Binaire: " + binary;
}
