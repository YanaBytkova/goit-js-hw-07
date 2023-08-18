import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');
console.log(galleryItems);
const listImages = galleryItems.map((item) => `<li class="gallery__item"  ><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description} ></a></li>`)
  .join("");

listEl.insertAdjacentHTML("beforeend", listImages);


console.log(listEl);

const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }
    event.preventDefault();
    
  const itemSource = event.target.dataset.source;
  console.log("2", itemSource);
  console.log(galleryItems);
  
    const curImage = galleryItems.find((item) => item.original === itemSource);
    
    const modalInstance = basicLightbox.create(`<div class="modal">
     <img src=${curImage.original} alt=${curImage.description}></div>`);
    modalInstance.show();
    addEventListener("keydown", event => {
    if (event.key === "Escape") {
      modalInstance.close();
  };
        console.log('You closed window!!!');
});
}

listEl.addEventListener("click", handleListClick);
