function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // loop through the string to count each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // loop through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // if no non-repeating character is found, return null
  return null;
}