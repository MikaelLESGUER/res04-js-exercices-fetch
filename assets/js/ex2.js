// let url = "https://jsonplaceholder.typicode.com/posts?userId=1";

// fetch(url)
// .then(function(response) {
//   return response.json();
// })
// .then(function(result) {
//   console.log(result.name);
//   let ul = document.getElementById("users-list");
  
//   for(let i = 0; i < result.length; i++)
//   {
//   	let li = document.createElement("li");
//     let liText = document.createTextNode(result[i].name);
    
//     li.appendChild(liText);
//     ul.appendChild(li);
//   }
// });

// fetch(url)
//   .then(response => response.json())
//   .then(user1 => {
//     console.log(user1);
//     // Créer la liste de définitions
//     const dl = document.createElement('dl');

//     // Ajouter le nom de l'utilisateur
//     const nameDt = document.createElement('dt');
//     nameDt.textContent = 'Nom';
//     dl.appendChild(nameDt);
//     const nameDd = document.createElement('dd');
//     nameDd.textContent = user.name;
//     dl.appendChild(nameDd);

//     // Ajouter l'email de l'utilisateur
//     const emailDt = document.createElement('dt');
//     emailDt.textContent = 'Email';
//     dl.appendChild(emailDt);
//     const emailDd = document.createElement('dd');
//     emailDd.textContent = user.email;
//     dl.appendChild(emailDd);

//     // Ajouter le site internet de l'utilisateur
//     const websiteDt = document.createElement('dt');
//     websiteDt.textContent = 'Site internet';
//     dl.appendChild(websiteDt);
//     const websiteDd = document.createElement('dd');
//     websiteDd.textContent = user.website;
//     dl.appendChild(websiteDd);

//     // Ajouter la liste de définitions à la page
//     document.body.appendChild(dl);
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur:', error);
//   });

//   const userId = 1;
// const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
// const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

// // Récupérer les informations de l'utilisateur
// fetch(userUrl)
//   .then(response => response.json())
//   .then(user => {
//     // Créer la liste de définitions
//     const dl = document.createElement('dl');

//     // Ajouter le nom de l'utilisateur
//     const nameDt = document.createElement('dt');
//     nameDt.textContent = 'Nom';
//     dl.appendChild(nameDt);
//     const nameDd = document.createElement('dd');
//     nameDd.textContent = user.name;
//     dl.appendChild(nameDd);

//     // Ajouter l'email de l'utilisateur
//     const emailDt = document.createElement('dt');
//     emailDt.textContent = 'Email';
//     dl.appendChild(emailDt);
//     const emailDd = document.createElement('dd');
//     emailDd.textContent = user.email;
//     dl.appendChild(emailDd);

//     // Ajouter le site internet de l'utilisateur
//     const websiteDt = document.createElement('dt');
//     websiteDt.textContent = 'Site internet';
//     dl.appendChild(websiteDt);
//     const websiteDd = document.createElement('dd');
//     websiteDd.textContent = user.website;
//     dl.appendChild(websiteDd);

//     // Ajouter la liste de définitions à la page
//     document.body.appendChild(dl);
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur:', error);
//   });

// // Récupérer les articles de l'utilisateur
// fetch(postsUrl)
//   .then(response => response.json())
//   .then(posts => {
//     // Créer la liste des articles
//     const ul = document.createElement('ul');

//     // Parcourir les articles et les ajouter à la liste
//     posts.forEach(post => {
//       const li = document.createElement('li');
//       li.textContent = post.title;
//       ul.appendChild(li);
//     });

//     // Ajouter la liste des articles à la page
//     document.body.appendChild(ul);
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des articles de l\'utilisateur:', error);
//   });


let url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(result) {
  console.log(result);
  
  url = `https://jsonplaceholder.typicode.com/posts?userId=${result.id}`;
  
  let name = document.createTextNode(result.name);
  let email = document.createTextNode(result.email);
  let website = document.createTextNode(result.website);
  let userName = document.getElementById("user-name");
  let userEmail = document.getElementById("user-email");
  let userWebsite = document.getElementById("user-website");
  
  userName.appendChild(name);
  userEmail.appendChild(email);
  userWebsite.appendChild(website);
  
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    console.log(result);
    
    let ul = document.getElementById("user-posts");
    
    for(let i = 0; i < result.length; i++)
    {
    	let li = document.createElement("li");
      let article = document.createElement("article");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let title = document.createTextNode(result[i].title);
      let body = document.createTextNode(result[i].body);
      
      h2.appendChild(title);
      p.appendChild(body);
      
      article.appendChild(h2);
      article.appendChild(p);
      li.appendChild(article);
      ul.appendChild(li);
    }
  });
});