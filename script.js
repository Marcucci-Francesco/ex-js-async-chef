/*
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch

🎯 Bonus 1
Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.

🎯 Bonus 2
Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.
*/

const getChefBirthday = async (id) => {

  let recipe;

  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
    recipe = await recipeResponse.json();
  } catch (error) {
    throw new Error(`Impossibile trovare la ricetta con id ${id}`);
  }

  if (!recipe) {
    throw new Error(`Impossibile trovare la ricetta con id ${id}`);
  }

  let birthdayChef;

  try {
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const recipeChef = await chefResponse.json();
    birthdayChef = recipeChef.birthDate;
  } catch (error) {
    throw new Error(`Impossibile trovare la data di nascita dello chef`)
  }

  if (!birthdayChef) {
    throw new Error(`Impossibile trovare la data di nascita dello chef con id ${id}`)
  }

  return birthdayChef;
}


(async () => {
  try {
    const birthdayChef = await getChefBirthday(2);
    const birthDate = dayjs(birthdayChef).format('DD/MM/YYYY');
    console.log('Data di nascita dello Chef:', birthDate);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Fine!');
  }
})();
