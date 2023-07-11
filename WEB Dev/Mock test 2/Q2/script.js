document.addEventListener('DOMContentLoaded', function() {
    var inputText = document.getElementById('inputText');
    var submitButton = document.getElementById('submitButton');
    var outputDiv = document.getElementById('output');
  
    submitButton.addEventListener('click', function() {
      var text = inputText.value;
  
      if (text.trim() !== '') {
        var newParagraph = document.createElement('p');
        newParagraph.textContent = text;
        outputDiv.appendChild(newParagraph);
        inputText.value = '';
      }
    });
  });