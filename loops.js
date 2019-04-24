function whileLoop(number){
  while (number > 0) {
    console.log(--number);
  }
  return "done";
};

function doWhileLoop(array){
  do {
    array.pop();
    console.log("I run once regardless.");
  } while (array.length > 0);
  return array;
};

function forLoop(array){
  array.push("I am 1 strange loop.")
  for (let i = 2; i < 25; i++){
    array.push(`I am ${i} strange loops.`)
  };
  return array;
};
