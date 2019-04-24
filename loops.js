function whileLoop(number){
  while (number > 0) {
    console.log(--number);
  }
  return "done";
};

function doWhileLoop(array){
  var i = array.length-1;

  function incrementVariable() {
    i = i - 1;
    return i;
  }

  do {
    array.pop();
    console.log("I run once regardless.");
  } while (incrementVariable() >= 0);
};
