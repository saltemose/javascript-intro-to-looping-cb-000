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
