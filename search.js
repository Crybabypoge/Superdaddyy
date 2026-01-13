const searchInput = document.querySelector('.search');
const productSections = document.querySelectorAll('.product-section');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    let anyVisibleOverall = false;

    productSections.forEach(section => {
        const cards = section.querySelectorAll('.product-card');
        let anyVisibleInSection = false;

        cards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const badge = card.querySelector('.badge').textContent.toLowerCase(); //

            // Show card if the name OR badge includes the search term
            if (name.includes(searchTerm) || badge.includes(searchTerm)) {
                card.style.display = 'block';
                anyVisibleInSection = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Hide or show the section title based on if any card is visible
        const sectionTitle = section.querySelector('.section-title');
        if (anyVisibleInSection) {
            section.style.display = 'block';
            anyVisibleOverall = true;
        } else {
            section.style.display = 'none';
        }
    });

    // Show or hide "No results found"
    noResults.style.display = anyVisibleOverall ? 'none' : 'block';
});
