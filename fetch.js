(function() {
  function submitForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var country = document.getElementById("country").value;

      var requestBody = {
          title: name,
          body: email + ' ' + country,
          userId: 1,
      };

      fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'PUT',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then(response => response.json())
      .then(json => {
          var responseTextarea = document.getElementById("responseTextarea");
          responseTextarea.value = "Response: " + JSON.stringify(json, null, 2);
          responseTextarea.classList.add("styled-response-textarea");
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }

  window.submitForm = submitForm;
})();