const getChefBirthday = async (id) => {
  const responseUser = await fetch(`https://dummyjson.com/recipes/${id}`)
  const recipeDate = await responseUser.json();
  const userId = recipeDate.userId;
  const responseChef = await fetch(`https://dummyjson.com/users/${userId}`)
  const recipeChef = await responseChef.json();
  const birthdayChef = recipeChef.birthDate;
  return birthdayChef;
}


(async () => {
  try {
    const birthdayChef = await getChefBirthday(1);
    console.log('Data di nascita dello Chef:', birthdayChef);
  } catch (error) {
    console.error('Impossibile trovare quanto richiesto');
  }
})();
