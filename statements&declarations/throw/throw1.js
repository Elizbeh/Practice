//Defines a function that throws a TypeError if the input is not of the expected type.
function isNumeric(x){
  return ["number", "bigint"].includes(typeof x)
}

function sum(...values){
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1,2,3));

try{
  sum("1", "2");
}catch (e) {
  console.error(e)
}