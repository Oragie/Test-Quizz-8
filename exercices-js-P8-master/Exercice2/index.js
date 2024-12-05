// Créez votre fonction ici
function calculate(num1, num2, operator) {
  // Valider l'opérateur
  if (!["+", "-", "*", "/"].includes(operator)) {
    return "Invalid operator";
  }

  // Gestion de la division par zéro
  if (operator === "/" && num2 === 0) {
    return "Division by zero is not allowed";
  }

  // Utilisation d'une fonction native pour calculer
  return eval(`${num1} ${operator} ${num2}`);
}

// Exemples d'utilisation
console.log(calculate(5, 3, "+")); // Affiche : 8
console.log(calculate(10, 4, "-")); // Affiche : 6
console.log(calculate(7, 2, "*")); // Affiche : 14
console.log(calculate(12, 3, "/")); // Affiche : 4
console.log(calculate(8, 0, "/")); // Affiche : Division by zero is not allowed
console.log(calculate(4, 5, "%")); // Affiche : Invalid operator

export default calculate;
