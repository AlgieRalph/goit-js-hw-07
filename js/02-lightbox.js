import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
  return el
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join("");
};

const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.on("show.simplelightbox");
