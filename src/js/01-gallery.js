// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// const simpleLightbox = require('simplelightbox');
// import simpleLightbox from "simplelightbox";



const listGallery = document.querySelector('.gallery')

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('')

listGallery.insertAdjacentHTML('afterbegin', markupGallery)



// new simpleLightbox('.gallery a', {
//   navText: ['<', '>'],
//   captionsData: 'alt',
//   captionDelay: 250,
// })

