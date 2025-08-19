import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderBox = document.querySelector('.loader-box');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image" loading="lazy"/>
        </a>
        <ul class="gallery-info">
          <li class="gallery-info-item">
            <span class="gallery-info-title">Likes</span>
            <span class="gallery-info-value">${likes}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Views</span>
            <span class="gallery-info-value">${views}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Comments</span>
            <span class="gallery-info-value">${comments}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Downloads</span>
            <span class="gallery-info-value">${downloads}</span>
          </li>
        </ul>
      </li>`;
    })
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

function clearGallery() {
  galleryContainer.innerHTML = '';
}

function showLoader() {
  loaderBox.classList.remove('hidden');
}

function hideLoader() {
  loaderBox.classList.add('hidden');
}

export default {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
};
