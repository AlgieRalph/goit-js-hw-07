import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGallery = (element) => {
  return element
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
};

const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

// --------------------------------------------------------------

// handleGalleryClick
const handleGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const urlOriginal = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${urlOriginal}">`);
  instance.show();

  const handleOnEscKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleOnEscKeyPress);
    }
  };

  window.addEventListener("keydown", handleOnEscKeyPress);
};

galleryList.addEventListener("click", handleGalleryClick);
