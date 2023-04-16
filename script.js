//your JS code here. If required.
function firstNonRepeatedCharacter(str) {
  // Create an empty object to hold the frequency of each character in the string
  const freqObj = {};
  
  // Loop through each character in the string and update the frequency object
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    freqObj[char] = (freqObj[char] || 0) + 1;
  }
  
  // Loop through each character in the string again and return the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (freqObj[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeated character is found, return null
  return null;
}