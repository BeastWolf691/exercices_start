
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return (b > a) ? , (b === a) ? , (b<a) ? a:b;
}

console.log(ternaryChain(15, 25));//en modifiant les valeurs nous pouvons vérfier que le return fonctionne bel et bien.
