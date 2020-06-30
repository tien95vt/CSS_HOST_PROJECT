const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.button__choose_plan');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// Button choose plane
for (let i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

// Button toggle
toggleButton.addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // mobileNav.style.display = 'block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

// modal & backdrop
backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    this.closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}


