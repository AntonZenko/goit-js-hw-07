import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryMurkup (items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>`;
      }).join('');
}

function onGalleryContainerClick(e) {
  e.preventDefault();

  const galleryItem =e.target.classList.contains('gallery__image');
  const largeImageLink =e.target.dataset.source;
  if (!galleryItem) {
    return;
  }
  const instance = basicLightbox.create(`<img src="${largeImageLink}">`,
    { onShow: () => {window.addEventListener('keydown', onEscPress) } },
    );

  instance.show();

  function onEscPress(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
  }

};

const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMurkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainerRef.addEventListener('click', onGalleryContainerClick);
