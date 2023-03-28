const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.dataset.title;
    const url = item.dataset.url;
    const metadata = document.querySelector('.metadata');
    metadata.innerHTML = `
      <h2>${title}</h2>
      <ul>
        <li><a href="${url}" target="_blank">${url}</a></li>
      </ul>
    `;
    metadata.style.display = 'block';
  });
});

// hide metadata on click outside of the grid or metadata
document.addEventListener('click', (event) => {
  const isGridItem = event.target.classList.contains('grid-item');
  const isMetadata = event.target.classList.contains('metadata');
  const metadata = document.querySelector('.metadata');
  if (!isGridItem && !isMetadata) {
    metadata.style.display = 'none';
  }
});
