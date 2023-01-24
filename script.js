const evaluatedText = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

evaluatedText.addEventListener("input", () => {
  let words = evaluatedText.value.split(" ").filter(x => x != "");
  wordCount.innerHTML = words.length;
});