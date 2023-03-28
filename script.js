const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item, index) => {
  item.setAttribute('data-index', index + 1); /* update data-index */
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
    metadata.style.top = `${event.pageY + 10}px`; /* add 10px to position metadata box below mouse */
    metadata.style.left = `${event.pageX + 10}px`; /* add 10px to position metadata box to the right of mouse */
  });
});

/* ... */
