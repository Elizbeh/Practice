function testNum(a){
  let result;
  if (a > 0){
    result = "Positive"
  }else{
    result = "Not positive"
  }
  return result
}

console.log(testNum(-5))
console.log(testNum(5))