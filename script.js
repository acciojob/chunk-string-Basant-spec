function stringChop(str, size) {
if (!str) return [];

  // Ensure size is a number
  size = Number(size);
  if (size <= 0) return [];

  const result = [];
  let i = 0;

  while (i < str.length) {
    result.push(str.slice(i, i + size));
    i += size;
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
