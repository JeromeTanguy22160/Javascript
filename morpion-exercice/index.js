/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*
L'objectif est d'implémenter le célèbre jeu du morpion.

Chaque joueur joue à tour de rôle :
 - Le joueur X joue
 - Le joueur O joue
 - Le jeu continue jusqu'à ce qu'un joueur gagne ou qu'il n'y a plus de case vide


Exemple d'algorithme (pour t'aider) :
-------------------------------------

- Définition de la variable qui contiendra le symbole du joueur
- Définition de la variable qui contiendra le numéro de la ligne
- Définition de la variable qui contiendra le numéro de la colonne

- Début de la boucle
while (true) {
  - Affichage du tableau de jeu dans la console
  - Demande au joueur de choisir une ligne
  - Demande au joueur de choisir une colonne
  - Vérification de la validité de la ligne : entre 0 et 2
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Vérification de la validité de la colonne : entre 0 et 2
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Vérification que la case est vide
  - Si non valide, afficher un message d'erreur et refaire la demande

  - Attribution du symbole du joueur à la case dans le tableau de jeu
  - Vérification de la victoire du joueur
  - S'il gagne, afficher un message de fin de partie

  - Vérification s'il reste des cases vides
  - Si toutes les cases sont remplies, le jeu est terminé par un nul

  - Changement de joueur
  - Changement du symbole du joueur : X ou O
}

*/
/**************************************************************/
/*                         Variables                          */
/**************************************************************/
let jeu = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let afficheur = document.querySelector(".gagnant")
let symboles = ["X", "O"];

let joueur1 = symboles[0];
let joueur2 = symboles[1];

let nombresTour = 1;

let player = joueur1;

// Les variables seront définies ici...

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
function resetGame() {
  jeu = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  
  afficheur.innerHTML = ""
  player = joueur1;
  nombresTour = 1;
  afficherJeu();
}

function afficherJeu() {
  let tableauJeu = document.querySelector(".gameContainer");
  tableauJeu.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let button = document.createElement("button");
      button.classList.add("button");
      button.textContent = jeu[i][j] || "";
      button.addEventListener("click", function() {
        jouercase(i, j, button);
      });
      tableauJeu.appendChild(button);
    }
  }
}

function jouercase(i, j, button) {
  if (jeu[i][j] !== null) {
    afficheur.innerHTML = " case déja prise !";
    return;
  } else{
    afficheur.innerHTML = ""
  }

  jeu[i][j] = player;
  button.textContent = player;


  if (victoire() === true) {
    afficheur.innerHTML = `${player} a gagné`;
    desactiverJeu();
  }

  nombresTour++;

  if (nombresTour > 9) {
    afficheur.innerHTML = "c'est une égalité !";
    desactiverJeu();
  }

  switchPlayer();
}

function victoire() {
  for (let i = 0; i < 3; i++) {

    if (jeu[i][0] && jeu[i][0] === jeu[i][1] && jeu[i][0] === jeu[i][2]) {
      return true;
    }

    if (jeu[0][i] && jeu[0][i] === jeu[1][i] && jeu[0][i] === jeu[2][i]) {
      return true;
    }
  }

  if (jeu[0][0] && jeu[0][0] === jeu[1][1] && jeu[0][0] === jeu[2][2]) {
    return true;
  }
  if (jeu[0][2] && jeu[0][2] === jeu[1][1] && jeu[0][2] === jeu[2][0]) {
    return true;
  }
  return false;
}


function switchPlayer() {
  if (player === joueur1) {
    player = joueur2;
  }
  else if (player === joueur2) {
    player = joueur1;
  }
}

function desactiverJeu() {
  const boutons = document.querySelectorAll(".gameContainer button");
  for (let k = 0; k < boutons.length; k++) {
    let bouton = boutons[k];
    bouton.disabled = true;

  }
}


afficherJeu();
document.querySelector(".rejouerBtn").addEventListener("click", resetGame);
