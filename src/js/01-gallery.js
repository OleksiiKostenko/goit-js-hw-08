// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function createImgGallery  (item)  {
    return item.map(item => {

        const linkEL = document.createElement("a");
        linkEL.classList.add("gallery__item");
        linkEL.href = item.original;

        const imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.src = item.preview;
        imgEl.alt = item.description;

        linkEL.appendChild(imgEl);
        return linkEL;
    });
};

const galleryWrapp = document.querySelector(".gallery");
const element = createImgGallery(galleryItems);
galleryWrapp.append(...element);

galleryWrapp.addEventListener('click', (event) => {
    event.preventDefault();
})
const simpleLightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt', });


 