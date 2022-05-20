import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryMurkup (items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
      }).join('');
}

function onGalleryContainerClick(e) {
  e.preventDefault();

  const galleryItem =e.target.classList.contains('gallery__image');
  if (!galleryItem) {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
    overlayOpacity: 0.8,
  scrollZoom: false,
});

  function onEscPress(e) {
    if (e.code === 'Escape') {
      gallery.close();
      window.removeEventListener('keydown', onEscPress);
    }
  }
};


const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMurkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainerRef.addEventListener('click', onGalleryContainerClick);

