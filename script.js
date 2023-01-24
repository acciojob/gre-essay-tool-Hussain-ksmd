//your code here
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", function(){
  let wordCountValue = textbox.value.split(" ").length;
  wordCount.innerHTML = wordCountValue;
})