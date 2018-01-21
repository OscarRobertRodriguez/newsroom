const layers = document.querySelectorAll('.category-title');
let selectedLayerNo;

layers.forEach(layer => {
    setLayerPosition(layer);
    layer.addEventListener('click', switchCategories);
});

function switchCategories() {
    const selectedLayer = this.parentElement;
    selectedLayer.addEventListener('transitionend', activateLayer);
    selectedLayerNo = Number(selectedLayer.dataset.layer);
    if (selectedLayerNo === 3) return;
    const diff = 3 - selectedLayerNo;

    const activeLayer = document.querySelector('[data-layer="3"]');
    activeLayer.addEventListener('transitionend', deactivateLayer);

    activeLayer.classList.remove('category-active');
    selectedLayer.classList.add('category-active');

    activeLayer.style.left = `-${diff * 22}px`;
    activeLayer.style.top = `-${diff * 48}px`;

    const left = Number(selectedLayer.style.left.split('px')[0]);
    const top = Number(selectedLayer.style.top.split('px')[0]);
    selectedLayer.style.left = `${left + diff * 22}px`;
    selectedLayer.style.top = `${top + diff * 48}px`;
}

function deactivateLayer() {
    this.style.transition = 'none';
    this.removeEventListener('transitionend', deactivateLayer);

    this.dataset.layer = selectedLayerNo;
    this.style.left = `${selectedLayerNo * 22}px`;
    this.style.top = `${selectedLayerNo * 48}px`;

    setTimeout(() => {
        this.style.transition = 'top .4s .1s ease-in-out, left .4s .1s ease-in-out';
    });
}

function activateLayer() {
    this.style.transition = 'none';
    this.removeEventListener('transitionend', activateLayer);
    if (selectedLayerNo === 3) return;

    this.dataset.layer = '3';
    this.style.left = '0px';
    this.style.top = '0px';

    setTimeout(() => {
        this.style.transition = 'top .4s .1s ease-in-out, left .4s .1s ease-in-out';
    });
}

function setLayerPosition(layer) {
    let layerNo = Number(layer.parentElement.dataset.layer);
    if (layerNo === 3) layerNo = 0;

    layer.parentElement.style.left = `${layerNo * 22}px`;
    layer.parentElement.style.top = `${layerNo * 48}px`;
}