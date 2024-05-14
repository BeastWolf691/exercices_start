
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const asynchrone = async () => {
  console.log("start");
  await sleep(2000);
  console.log("end");
}
 asynchrone();
/**dans cet exemple end sera affiché après start sous un délai de 2000ms  */
module.exports = {sleep};