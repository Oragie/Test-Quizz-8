// Fonction pour ajouter un chiffre ou un opérateur à l'affichage
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Fonction pour calculer le résultat
function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value;

  // Vérifier si l'expression contient une division par zéro
  if (expression.includes("/0")) {
    display.value = "Division by zero is not allowed";
    return;
  }

  try {
    // Évaluer l'expression
    display.value = eval(expression);
  } catch (error) {
    // Si une erreur se produit dans l'évaluation, afficher un message d'erreur
    display.value = "Erreur";
  }
}
