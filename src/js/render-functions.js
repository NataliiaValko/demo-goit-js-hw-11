export function createGalleryMarkup(items = []) {
  return items
    .map(
      item => `
        <li class="gallery-item">
          <a href="${item.urls.regular}" class="gallery-link">
            <div class="card-wrapper-img">
              <img
                class="card-img"
                src="${item.urls.small}"
                alt="${item.alt_description}"
              />
            </div>
            <div class="card-info">
              <div class="card-info-colum">
                <p class="card-info-title">likes</p>
                <p class="card-info-value">${item.likes}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">views</p>
                <p class="card-info-value">${item.user.name}</p>
              </div>
            </div>
          </a>
        </li>`
    )
    .join('');
}
