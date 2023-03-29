const gridItems = document.querySelectorAll('.grid-item');
const metadata = document.querySelector('.metadata');

gridItems.forEach((item, index) => {
  item.setAttribute('data-index', index + 1);
  item.addEventListener('click', (event) => {
    const title = item.dataset.title;
    const url = item.dataset.url;
    metadata.innerHTML = `
      <h2>${title}</h2>
      <ul>
        <li><a href="${url}" target="_blank">${url}</a></li>
      </ul>
    `;
    metadata.style.display = 'block';
    metadata.style.top = `${event.pageY + 10}px`;
    metadata.style.left = `${event.pageX + 10}px`;
    
    // Check if the metadata block extends beyond the visible screen area
    const metadataBottom = metadata.offsetTop + metadata.offsetHeight;
    const visibleScreenBottom = window.pageYOffset + window.innerHeight;
    const distanceToBottom = metadataBottom - visibleScreenBottom;
    
    if (distanceToBottom > 0) {
      // Adjust the position of the metadata block to fit within the visible screen area
      metadata.style.top = `${event.pageY - metadata.offsetHeight - 20}px`;
    }
  });
});

