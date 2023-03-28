const gridItems = document.querySelectorAll('.grid-item');
const metadata = document.querySelector('.metadata');

// Compute the height of the grid and the metadata box
const gridHeight = document.querySelector('.grid').offsetHeight;
const metadataHeight = metadata.offsetHeight;

gridItems.forEach((item, index) => {
  item.setAttribute('data-index', index + 1); /* update data-index */
  item.addEventListener('click', (event) => {
    const title = item.dataset.title;
    const url = item.dataset.url;

    // Compute the position of the metadata box
    const itemRect = item.getBoundingClientRect();
    const metadataTop = Math.min(itemRect.bottom, gridHeight - metadataHeight);
    const metadataLeft = itemRect.left;

    metadata.innerHTML = `
      <h2>${title}</h2>
      <ul>
        <li><a href="${url}" target="_blank">${url}</a></li>
      </ul>
    `;
    metadata.style.display = 'block';
    metadata.style.top = `${metadataTop + 10}px`; /* add 10px to position metadata box below item */
    metadata.style.left = `${metadataLeft + 10}px`; /* add 10px to position metadata box to the right of item */
  });
});
