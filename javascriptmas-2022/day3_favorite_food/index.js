const faveFoods = {
  breakfast: 'ackee & breadfruit',
  lunch: 'curried chickpeas',
  supper: 'salmon'
}

const { breakfast, lunch, supper } = faveFoods;
const meals = document.getElementById('meals');

meals.innerHTML = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I usually want ${supper}.`