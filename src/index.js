const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
  // Define a dictionary that maps 10 and 11 to dots and dashes
  let binaryToMorse = {
    "10": ".",
    "11": "-"
  };
  // Initialize an empty string to store the decoded message
  let message = "";
  // Loop through the input string in chunks of 10 characters
  for (let i = 0; i < str.length; i += 10) {
    // Get the current chunk
    let chunk = str.slice(i, i + 10);
    // If the chunk is all asterisks, it means a space
    if (chunk === "**********") {
      // Add a space to the message
      message += " ";
    } else {
      // Otherwise, convert the chunk from binary to Morse code
      let morse = "";
      for (let j = 0; j < 10; j += 2) {
        // Get the current pair of digits
        let pair = chunk.slice(j, j + 2);
        // If the pair is not 00, it means a dot or a dash
        if (pair !== "00") {
          // Add the corresponding symbol to the morse code
          morse += binaryToMorse[pair];
        }
      }
      // Convert the morse code to a letter and add it to the message
      message += MORSE_TABLE[morse];
    }
  }
  // Return the decoded message
  return message;
}

module.exports = {
    decode
}