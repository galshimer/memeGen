'use strict'

function renderGallery() {
    var elGalleryContainer = document.querySelector('.gallery-container')
const strHTMLS = gImgs.map(img=> `
    <img src="${img.url}" alt="Gallery Image" onclick="onImgSelect(this)" data-img-id="${img.id}" class="image">
        `)
elGalleryContainer.innerHTML=strHTMLS.join('')
}
