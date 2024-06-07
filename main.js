const button = document.getElementById("joke-button");
console.log(button)
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';
button.addEventListener("click",jokeUpdate)
let count = 1;


/*function jokeUpdate() { 
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

}*/

async function jokeUpdate() 
{
  console.log('calling',apiUrl);
  const endpoints = [apiUrl,apiUrl]
  //const result = await fetch(apiUrl,{method: 'GET',});
  const results = await Promise.all(endpoints.map(makeAPICall));
  console.log(results);
  //const data = await results.json()
  //console.log(data)
  if (results[0].type == "single")
    {
      let joke = results[0].joke
      console.log(results[0].joke)
      document.getElementById("demo1").innerHTML = "joke 1: " + joke;
    }
  else
    {
      let setup = results[0].setup
      let delivery = results[0].delivery
      document.getElementById("demo1").innerHTML = "joke 1: " + setup +"\n"+ delivery;
    }

    if (results[1].type == "single")
      {
        let joke = results[1].joke
        console.log(results[1].joke)
        document.getElementById("demo2").innerHTML = "joke 2: " + joke;
      }
    else
      {
        let setup = results[1].setup
        let delivery = results[1].delivery
        document.getElementById("demo2").innerHTML = "joke 2: " + setup +"\n"+ delivery;
      }
}

async function makeAPICall(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
/*async function makeMultipleAPICalls(endpoints) {
  try{
    const promises = endpoints.map(makeAPICall);
  const responses = await Promise.all(promises);
  return responses;
  }
  catch (error) 
{
  console.error('Error:', error);
}
}*/