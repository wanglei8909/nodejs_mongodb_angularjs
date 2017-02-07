var censoredWords = ["sad", "bad", "mad"];
var customcensoredWords = [];
function censor(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for (idx in censoredWords) {
      inStr = inStr.replace(customcensoredWords[idx], "****");
  }
  return inStr;
}
function addCensoreWords(word) {
  customcensoredWords.push(word);
}
function getCensoredWords() {
  return censoredWords.concat(customcensoredWords);
}

exports.censor = censor;
exports.addCensoreWords = addCensoreWords;
exports.getCensoredWords = getCensoredWords;
