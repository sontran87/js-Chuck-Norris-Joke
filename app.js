document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();
  const number = document.querySelector('input[type = "number"]').value;
  // console.log(number);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';
      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</>`;
        });
      } else {
        output += 'Some thing went wrong';
      }
      document.getElementById('jokes').innerHTML = output;
    }
  };
  xhr.send();
}
