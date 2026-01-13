const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        modalImage.src = card.dataset.image;
        modalName.textContent = card.dataset.name;
        modalCategory.textContent = card.dataset.category;
        modalDescription.textContent = card.dataset.description;
        const sizes = JSON.parse(card.dataset.sizes);
        modalSizes.innerHTML = ''; 
        sizes.forEach(s => {
            const p = document.createElement('p');
            p.textContent = `${s.size}: ${s.price}`;
            modalSizes.appendChild(p);
        });
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});


