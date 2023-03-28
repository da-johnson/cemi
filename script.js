// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Add event listeners for hover and click
gridItems.forEach(item => {
    item.addEventListener('mouseover', showMetadata);
    item.addEventListener('mouseout', hideMetadata);
    item.addEventListener('click', openUrl);
});

// Show metadata on hover
function showMetadata() {
    const index = this.dataset.index;
    const metadataBox = document.querySelector('.metadata');
    metadataBox.innerHTML = '<ul><li>Metadata for Grid Item ' + index + '</li><li><a href="#">Click me</a></li></ul>';
    metadataBox.style.display = 'block';
}

// Hide metadata on mouseout
function hideMetadata() {
    const metadataBox = document.querySelector('.metadata');
    metadataBox.style.display = 'none';
}

// Open URL on click
function openUrl() {
    const url = 'https://www.example.com';
    window.open(url, '_blank');
}
