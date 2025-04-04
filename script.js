const getChefBirthday = async (id) => {

  let userId;
  let birthdayChef;

  try {
    const userResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipeUser = await userResponse.json();
    userId = recipeUser.userId;
  } catch (error) {
    throw new Error(`Impossibile trovare l'user con id ${id}: ${error.message}`);
  }

  try {
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`)
    const recipeChef = await chefResponse.json();
    birthdayChef = recipeChef.birthDate;
  } catch (error) {
    throw new Error(`Impossibile trovare la data di nascita dello chef: ${error.message}`)
  }

  return birthdayChef;
}


(async () => {
  try {
    const birthdayChef = await getChefBirthday(1);
    console.log('Data di nascita dello Chef:', birthdayChef);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Fine!');

  }
})();
