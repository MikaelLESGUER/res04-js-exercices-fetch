// // let url = "https://jsonplaceholder.typicode.com/comments?postId=1";

// // fetch(url)
// // .then(function(response) {
// //   return response.json();
// // })
// // .then(function(result) {
// //   console.log(result);
// //   let ul = document.getElementById("users-list");
  
// //   for(let i = 0; i < result.length; i++)
// //   {
// //   	let li = document.createElement("li");
// //     let liText = document.createTextNode(result[i].name);
    
// //     li.appendChild(liText);
// //     ul.appendChild(li);
// //   }
// // });

// const postId = 1;
// const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
// const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

// // Fonction pour créer un élément HTML avec du texte
// function createTextElement(tag, text) {
//   const element = document.createElement(tag);
//   element.textContent = text;
//   return element;
// }

// // Fonction pour afficher les informations du post et les commentaires
// function displayPostAndComments(post, comments) {
//   // Sélection des éléments de l'article
//   const postHeader = document.getElementById('postHeader');
//   const postBody = document.getElementById('postBody');
//   const postFooter = document.getElementById('postFooter');

//   // Affichage du titre du post dans le header
//   const postTitle = createTextElement('h1', post.title);
//   postHeader.appendChild(postTitle);

//   // Affichage du corps du post dans le paragraphe
//   const postContent = createTextElement('p', post.body);
//   postBody.appendChild(postContent);

//   // Affichage des commentaires dans le footer
//   comments.forEach(comment => {
//     const commentName = createTextElement('h3', comment.name);
//     const commentEmail = createTextElement('p', comment.email);
//     const commentBody = createTextElement('p', comment.body);

//     postFooter.appendChild(commentName);
//     postFooter.appendChild(commentEmail);
//     postFooter.appendChild(commentBody);
//   });
// }

// // Récupérer les informations du post
// fetch(postUrl)
//   .then(response => response.json())
//   .then(post => {
//     // Récupérer les commentaires du post
//     fetch(commentsUrl)
//       .then(response => response.json())
//       .then(comments => {
//         console.log(comments);
//         // Afficher les informations du post et les commentaires
//         displayPostAndComments(post, comments);
//       })
//       .catch(error => {
//         console.log('Une erreur s\'est produite lors de la récupération des commentaires du post:', error);
//       });
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des informations du post:', error);
//   });

let url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    console.log(result);
    
    let h2 = document.querySelector("article > header > h2");
    let p = document.querySelector("article > p");
    
    let title = document.createTextNode(result.title);
    let body = document.createTextNode(result.body);
    
    h2.appendChild(title);
    p.appendChild(body);

    url = `https://jsonplaceholder.typicode.com/comments?postId=${result.id}`;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
        
        let dl = document.querySelector("article > footer > dl");
        for(let i = 0; i < result.length; i++)
        {
        	let dt = document.createElement("dt");
          let dd = document.createElement("dd");
          
          let name = document.createTextNode(result[i].name);
          let body = document.createTextNode(result[i].body);
          
          dt.appendChild(name);
          dd.appendChild(body);
          
          dl.appendChild(dt);
          dl.appendChild(dd);
        }
      });
  });
