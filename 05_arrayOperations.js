
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const mapArray = [1,4,9,16];
const multiplyByTwo = array => array.map((x) => x*2);/**il existe encore un code plus court selon le modele sur MDN mais il est préférable de renseigné = pour le visuel */

console.log(multiplyByTwo(mapArray));


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */
/**ce qui est après le = peut etre modifier, c'est un exemple type*/


const array1 = ['Prisme', 'Ariel','Json','Antivol'];
const filterNameStartByA = (array) => array.filter(item => item.startsWith('A'));/**cette méthode filtre par la 1ere lettre dans ce cas la minuscule et a */

console.log(filterNameStartByA(array1));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const array2 = [1,4,9,16];

const sum = array2 => array2.reduce ((accumulator, currentValue) => accumulator + currentValue,0);
//cette fonction permet d'additionner la valeur total du tableau. nous avons une fonction fléché comparé a la doc. 0 sert comme valeur initiale donc initialValue

console.log(sum(array2));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const array3 =  [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'},
  ];

const findUserById = (arr, id) => arr.find(user => user.id === id)?.name ?? null;/**permet que l'objet redevienne un name, le partie null permet de renvoyer null si aucune valeur */
/**de cette maniere on indique le tableau où l'on cherche l'information, quel colonne est prise en compte */
/**et dans console.log on indique l'id que nous voulons voir apparaître */

console.log(findUserById(array3,3))


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};