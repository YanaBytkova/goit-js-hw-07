import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');
console.log(galleryItems);
const listImages = galleryItems.map((item) => `<li class="gallery__item"  ><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description} ></a></li>`)
  .join("");

listEl.insertAdjacentHTML("beforeend", listImages);


console.log(listEl);

const handleListClick = (event) => {
  if(event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    
  const itemSource = event.target.dataset.source;
  console.log("2", itemSource);
  console.log(galleryItems);
  
    const curImage = galleryItems.find((item) => item.original === itemSource);
    const closeEscape = addEventListener("keydown", event => {
      if (event.key === "Escape") {
        instance.close();
    };
          console.log('You closed window!!!');
  });
    const instance = basicLightbox.create(`<div class="modal">
    <img src=${curImage.original} alt=${curImage.description}></div>`, {
      onShow: (instance) => { instance.element().querySelector('img').onclick = instance.close; window.addEventListener("keydown", closeEscape) },
      onClose: (instance) => window.removeEventListener("keydown", closeEscape)
})
   instance.show();

}

listEl.addEventListener("click", handleListClick);
