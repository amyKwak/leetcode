var canConstruct = function (ransomNote, magazine) {
  for (const char of ransomNote) {
    if (magazine.includes(char)) {
      magazine = magazine.replace(char, "");
    } else {
      return false;
    }
  }
  return true;
};
