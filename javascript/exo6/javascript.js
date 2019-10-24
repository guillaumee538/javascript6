// On recherche les données données dans le fichier html
document.getElementById('submit').addEventListener('click', displayUserNumber);
// on fait une fonction afin de pouvoir faire le calcul et avoir le resultat demander à savoir le reste de la division eclidienne
function displayUserNumber(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // On sécurise le formulaire en le forcant a régir seulement à des nombres
  if(secondNumber == '0'){
    alert('le deuxième chiffre doit ètre différent de 0');
  }else if((isNaN(firstNumber) == false) && (isNaN(secondNumber) == false)){
    var result = firstNumber % secondNumber;
    // on demande le resultat
    alert('resultat :' + result);
  }else{
    alert('veuillez saisir un nombre');
  }
}
