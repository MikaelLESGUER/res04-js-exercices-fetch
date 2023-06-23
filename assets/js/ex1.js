let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(result) {
  console.log(result);
  let ul = document.getElementById("users-list");
  
  for(let i = 0; i < result.length; i++)
  {
  	let li = document.createElement("li");
    let liText = document.createTextNode(result[i].name);
    
    li.appendChild(liText);
    ul.appendChild(li);
  }
});