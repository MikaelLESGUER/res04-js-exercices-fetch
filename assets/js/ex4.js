// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const userId = 1;
// const albumsUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
// const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

// // Fonction pour créer un élément HTML avec du texte
// function createTextElement(tag, text) {
//   const element = document.createElement(tag);
//   element.textContent = text;
//   return element;
// }

// // Fonction pour afficher les albums et les photos
// function displayAlbumsAndPhotos(albums, photos) {
//   console.log('Liste des albums :');
//   albums.forEach(album => {
//     console.log(album.title);
//   });

//   console.log('Liste des photos :');
//   albums.forEach(album => {
//     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//     albumPhotos.forEach(photo => {
//       console.log(photo.title);
//     });
//   });

//   const container = document.getElementById('albumsContainer');

//   albums.forEach(album => {
//     const albumElement = document.createElement('div');
//     albumElement.classList.add('album');

//     const albumTitle = createTextElement('h2', album.title);
//     albumElement.appendChild(albumTitle);

//     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//     albumPhotos.forEach(photo => {
//       const photoTitle = createTextElement('h3', photo.title);
//       albumElement.appendChild(photoTitle);
//     });

//     container.appendChild(albumElement);
//   });
// }

// // Récupérer les albums de l'utilisateur
// fetch(albumsUrl)
//   .then(response => response.json())
//   .then(albums => {
//     console.log('Albums récupérés :');
//     console.log(albums);

//     // Récupérer toutes les photos
//     fetch(photosUrl)
//       .then(response => response.json())
//       .then(photos => {
//         console.log('Photos récupérées :');
//         console.log(photos);

//         // Afficher les albums et les photos
//         displayAlbumsAndPhotos(albums, photos);
//       })
//       .catch(error => {
//         console.log('Une erreur s\'est produite lors de la récupération des photos:', error);
//       });
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des albums:', error);
//   });

// const userId = 1;
// const albumsUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
// const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

// // Fonction pour créer un élément HTML avec du texte
// function createTextElement(tag, text) {
//   const element = document.createElement(tag);
//   element.textContent = text;
//   return element;
// }

// // Fonction pour afficher les albums et les photos
// function displayAlbumsAndPhotos(albums, photos) {
//   console.log('Liste des albums :');
//   albums.forEach(album => {
//     console.log(album.title);
//   });

//   console.log('Liste des photos :');
//   albums.forEach(album => {
//     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//     albumPhotos.forEach(photo => {
//       console.log('Titre :', photo.title);
//       console.log('URL de la miniature :', photo.thumbnailUrl);
//     });
//   });

//   const container = document.getElementById('albumsContainer');

//   albums.forEach(album => {
//     const albumElement = document.createElement('div');
//     albumElement.classList.add('album');

//     const albumTitle = createTextElement('h2', album.title);
//     albumElement.appendChild(albumTitle);

//     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//     albumPhotos.forEach(photo => {
//       const photoTitle = createTextElement('h3', photo.title);
//       albumElement.appendChild(photoTitle);

//       const thumbnailImg = document.createElement('img');
//       thumbnailImg.src = photo.thumbnailUrl;
//       albumElement.appendChild(thumbnailImg);
//     });

//     container.appendChild(albumElement);
//   });
// }

// // Récupérer les albums de l'utilisateur
// fetch(albumsUrl)
//   .then(response => response.json())
//   .then(albums => {
//     console.log('Albums récupérés :');
//     console.log(albums);

//     // Récupérer toutes les photos
//     fetch(photosUrl)
//       .then(response => response.json())
//       .then(photos => {
//         console.log('Photos récupérées :');
//         console.log(photos);

//         // Afficher les albums et les photos
//         displayAlbumsAndPhotos(albums, photos);
//       })
//       .catch(error => {
//         console.log('Une erreur s\'est produite lors de la récupération des photos:', error);
//       });
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des albums:', error);
//   });

// const userId = 1;
// const albumsUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
// const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

// // Fonction pour créer un élément HTML avec du texte
// function createTextElement(tag, text) {
//   const element = document.createElement(tag);
//   element.textContent = text;
//   return element;
// }

// // Fonction pour afficher les albums et les photos
// function displayAlbumsAndPhotos(albums, photos) {
//   const container = document.getElementById('albumsContainer');

//   albums.forEach(album => {
//     const sectionElement = document.createElement('section');
//     sectionElement.classList.add('album');

//     const albumTitle = createTextElement('h2', album.title);
//     sectionElement.appendChild(albumTitle);

//     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
//     albumPhotos.forEach(photo => {
//       const articleElement = document.createElement('article');

//       const photoTitle = createTextElement('h3', photo.title);
//       articleElement.appendChild(photoTitle);

//       const thumbnailImg = document.createElement('img');
//       thumbnailImg.src = photo.thumbnailUrl;
//       articleElement.appendChild(thumbnailImg);

//       sectionElement.appendChild(articleElement);
//     });

//     container.appendChild(sectionElement);
//   });
// }

// // Récupérer les albums de l'utilisateur
// fetch(albumsUrl)
//   .then(response => response.json())
//   .then(albums => {
//     // Récupérer toutes les photos
//     fetch(photosUrl)
//       .then(response => response.json())
//       .then(photos => {
//         // Afficher les albums et les photos
//         displayAlbumsAndPhotos(albums, photos);
//       })
//       .catch(error => {
//         console.log('Une erreur s\'est produite lors de la récupération des photos:', error);
//       });
//   })
//   .catch(error => {
//     console.log('Une erreur s\'est produite lors de la récupération des albums:', error);
//   });

const userId = 1;
const albumsUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

// Fonction pour créer un élément HTML avec du texte
function createTextElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

// Fonction pour afficher les albums et les photos
function displayAlbumsAndPhotos(albums, photos) {
  const container = document.getElementById('albumsContainer');
  const albumContainer = document.createElement('div');
  albumContainer.classList.add('album-container');

  albums.forEach(album => {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('album');

    const albumTitle = createTextElement('h2', album.title);
    albumContainer.appendChild(albumTitle);

    const albumPhotos = photos.filter(photo => photo.albumId === album.id);
    albumPhotos.slice(0, 6).forEach(photo => {
      const articleElement = document.createElement('article');
      articleElement.classList.add('image');

      const photoTitle = createTextElement('h3', photo.title);
      articleElement.appendChild(photoTitle);

      const thumbnailImg = document.createElement('img');
      thumbnailImg.src = photo.thumbnailUrl;
      articleElement.appendChild(thumbnailImg);

      sectionElement.appendChild(articleElement);
    });

    albumContainer.appendChild(sectionElement);
  });

  container.appendChild(albumContainer);
}

// Récupérer les albums de l'utilisateur
fetch(albumsUrl)
  .then(response => response.json())
  .then(albums => {
    // Récupérer toutes les photos
    fetch(photosUrl)
      .then(response => response.json())
      .then(photos => {
        // Afficher les albums et les photos
        displayAlbumsAndPhotos(albums, photos);
      })
      .catch(error => {
        console.log('Une erreur s\'est produite lors de la récupération des photos:', error);
      });
  })
  .catch(error => {
    console.log('Une erreur s\'est produite lors de la récupération des albums:', error);
  });
