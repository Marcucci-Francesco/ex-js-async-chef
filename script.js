

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
    const birthDate = dayjs(birthdayChef);
    console.log('Data di nascita dello Chef:', birthDate.format('DD/MM/YYYY'));
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Fine!');
  }
})();
