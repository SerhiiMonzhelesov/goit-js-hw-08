// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

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

new SimpleLightbox('.gallery a', {
  navText: ['&#8656', '&#8658'],
  captionsData: 'alt',
  captionDelay: 250,
  
})







