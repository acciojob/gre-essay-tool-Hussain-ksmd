//your code here
// Get the textbox and h3 tag
      const textbox = document.getElementById("evaluatedText");
      const wordCount = document.getElementById("wordCount");
Copy code
  // Add an event listener to the textbox to listen for changes
  textbox.addEventListener("input", function() {
    // Get the text from the textbox
    const text = textbox.value;
    
    // Count the number of words in the text
    const count = text.trim().split(" ").length;
    
    // Update the h3 tag with the new word count
    wordCount.innerHTML = count;
  });