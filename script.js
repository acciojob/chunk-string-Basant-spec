function stringChop(str, size) {
    // Handle edge cases
    if (!str) return []; // Return an empty array if input string is null or undefined
    if (size <= 0) return []; // Return an empty array if chunk size is invalid

    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");

const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
