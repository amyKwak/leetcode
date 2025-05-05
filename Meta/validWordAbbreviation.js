function validWordAbbreviation(word, abbr) {
  let i = 0; // Pointer for the word
  let j = 0; // Pointer for the abbreviation

  while (i < word.length && j < abbr.length) {
    if (isNaN(abbr[j]) || abbr[j] === "0") {
      // If the current char in abbreviation is not a number or is '0', they should match exactly
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    } else {
      // If it is a number, calculate the full number (it could be more than 1 digit)
      let num = 0;
      while (j < abbr.length && !isNaN(abbr[j])) {
        num = num * 10 + parseInt(abbr[j]);
        j++;
      }
      // Move the word pointer forward by the number obtained
      i += num;
    }
  }

  // Both pointers should have traversed both the word and abbreviation entirely
  return i === word.length && j === abbr.length;
}

// Example Usage:
console.log(validWordAbbreviation("substitution", "s10n")); // true
console.log(validWordAbbreviation("substitution", "sub4u4")); // true
console.log(validWordAbbreviation("substitution", "s55n")); // false
console.log(validWordAbbreviation("substitution", "s010n")); // false
