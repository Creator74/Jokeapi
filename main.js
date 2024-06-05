const button = document.getElementById("joke-button");
console.log(button)
button.addEventListener("click",jokeUpdate)
let count = 1;

const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';

function jokeUpdate() { 
  fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    console.log(data); // Example: Logging the data to the console
    if (data.type == "single")
    {
      let joke = data.joke
      document.getElementById("demo").innerHTML = joke;
    }
    else
    {
      let setup = data.setup
      let delivery = data.delivery
      document.getElementById("demo").innerHTML = setup +"\n"+ delivery;
}})
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });

}
