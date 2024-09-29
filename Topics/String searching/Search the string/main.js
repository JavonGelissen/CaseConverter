function searchFruit(fruitOne, fruitTwo) {
  let text = `My favorite fruit is grapes. Because with grapes, you always
    get another chance. 'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape, no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;

  // Search for fruitOne in the whole text
  let fruitOneIndex = text.includes(fruitOne);
  console.log(`${fruitOneIndex}`);

  // Search for fruitTwo starting from position 50 in the text
  let fruitTwoIndex = text.includes(fruitTwo, 50);
  console.log(`${fruitTwoIndex}`);
}

// Call the function with the arguments
let fruitOne = "apple";
let fruitTwo = "grapes";
searchFruit(fruitOne, fruitTwo);
