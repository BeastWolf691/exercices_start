
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */


const sleep = () => {return new Promise((resolve,reject) => 
  {setTimeout(() => {
    resolve();},
    2000);})};

sleep()
    .then(() => console.log('done'))
    .catch(() => console.log('error'));
    
/**dans cet exemple end sera affiché après start sous un délai de 2000ms  */
module.exports = {sleep};