// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);

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

