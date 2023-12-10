let stack =[]

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

//let deleteNumber  = stack.pop()
////console.log(stack)
//console.log(deleteNumber)

//let deleteNumber2 =stack.shift() //ne devrait pas fonctionner on va utiliser un autre methode
//console.log(deleteNumber2)
//console.log(stack)


                     // STACK PROTOTYPE

function Stack2() {
    this.arr = [];
}

// Ajouter une méthode "add" à la prototype de la fonction constructeur
Stack2.prototype.add = function(value) {
    this.arr.push(value);
}

// Utiliser la méthode "pop" pour supprimer le dernier élément du tableau
Stack2.prototype.delete = function() {
    this.arr.pop();
}

// Créer une instance de Stack2
const pil = new Stack2();

// Ajouter des éléments à la pile
pil.add(1);
pil.add(2);
pil.add(3);

// Appeler la méthode "delete" pour supprimer le dernier élément
pil.delete();

// Afficher le contenu de la pile dans la console
console.log(pil);


//Renommage de la fonction stack2 en Stack2 pour suivre les conventions de nommage des constructeurs en JavaScript (avec une majuscule au début).

//Utilisation de la méthode pop dans la fonction delete sans argument, car pop retire automatiquement le dernier élément du tableau.

//Utilisation de new Stack2() pour créer une instance de Stack2.

//Utilisation de pil.delete() avec des parenthèses pour appeler la méthode delete.



