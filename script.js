const gridItems = document.querySelectorAll('.grid-item');
const grid = document.querySelector('.grid');
const metadata = document.querySelector('.metadata');

gridItems.forEach((item, index) => {
  item.setAttribute('data-index', index + 1);
  item.addEventListener('click', () => {
    const title = item.dataset.title;
    const url = item.dataset.url;
    metadata.innerHTML = `
      <h2>${title}</h2>
      <ul>
        <li><a href="${url}" target="_blank">${url}</a></li>
      </ul>
    `;
    metadata.style.display = 'block';
    const rect = grid.getBoundingClientRect();
    const bottom = rect.top + rect.height;
    metadata.style.top = `${bottom + 10}px`;
    metadata.style.left = `${item.offsetLeft}px`;
  });
});
