document.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loader');
  var dataDiv = document.getElementById('data');
 
  loader.style.display = 'block';
 
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) { 
      loader.style.display = 'none';
 
      dataDiv.style.display = 'block';
      posts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.innerHTML = '<h2>' + post.title + '</h2><p>' + post.body + '</p>';
        dataDiv.appendChild(postElement);
      });
    })
    .catch(function(error) {
      console.log('An error occurred:', error);
    });
});