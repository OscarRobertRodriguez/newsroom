const doc = document.querySelector('body');
const modals = document.querySelectorAll('.modal');

doc.addEventListener('keydown', function (e) {
    // Use 'Ctrl + m' to toggle modals (only until they are integrated properly)
    if (e.key === 'm' && e.ctrlKey) toggleModals(modals);
});

function toggleModals(collection) {
    collection.forEach(modal => {
        modal.classList.toggle('hidden');
    });
}


const settingsIcon = document.querySelector('.settings-icon');
const settingsModal = document.querySelector('.modal-settings');

settingsIcon.addEventListener('click', toggleSettingsModal);

function toggleSettingsModal(e) {
    settingsModal.classList.toggle('hidden');
}