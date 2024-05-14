
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

module.exports = {sleep};