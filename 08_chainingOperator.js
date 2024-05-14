
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */
const band =  {
     name: "John",
       group: {
         name: "admin"
       }
    }

const getGroupName = (obj) => {
    return band?.group.name/**cela fait le chemon où nous voulons trouver l'information, si vous voulions que cela affiche name admin on se serait arreter a group. */
};

console.log(getGroupName())
module.exports = {getGroupName};