// Créez votre fonction ici
function calculateAverage(numbers) {
  // Vérifier si le tableau est défini et non vide
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "No numbers to calculate average";
  }

  // Calculer la somme des nombres
  const sum = numbers.reduce((total, num) => total + num, 0);

  // Retourner la moyenne
  return sum / numbers.length;
}

// Exemples d'utilisation
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // retourne : No numbers to calculate average

export default calculateAverage;
