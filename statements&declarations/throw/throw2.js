//This example calls a callback-based async function, and throws an error if the callback receives an erro
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});