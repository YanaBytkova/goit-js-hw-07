import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector('.gallery');
console.log(galleryItems);
const listImages = galleryItems.map((item) => `<li class="gallery__item"  ><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} alt="${item.description}" ></a></li>`)
  .join("");

listEl.insertAdjacentHTML("beforeend", listImages);

console.log(listEl);


    var gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
    
    gallery.on('show.simplelightbox', function () {
        
	console.log(gallery);
});
