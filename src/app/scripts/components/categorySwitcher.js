const layers = document.querySelectorAll('.category-title');
let selectedLayerNo;

layers.forEach(layer => {
    setLayerPosition(layer);
    layer.addEventListener('click', activateCategory);
});

function activateCategory() {
    const selectedLayer = this.parentElement;
    selectedLayer.addEventListener('transitionend', activateLayer);
    selectedLayerNo = Number(selectedLayer.dataset.layer);
    if (selectedLayerNo === 3) return;
    const activeLayer = document.querySelector('[data-layer="3"]');
    activeLayer.addEventListener('transitionend', deactivateLayer);
    const diff = 3 - selectedLayerNo;

    activeLayer.style.left = `-${diff * 22}px`;
    activeLayer.style.top = `-${diff * 48}px`;
    const left = Number(selectedLayer.style.left.split('px')[0]);
    const top = Number(selectedLayer.style.top.split('px')[0]);
    selectedLayer.style.left = `${left + diff * 22}px`;
    selectedLayer.style.top = `${top + diff * 48}px`;
}

function deactivateLayer() {
    this.removeEventListener('transitionend', deactivateLayer);
    this.classList.remove('category-active');
    this.dataset.layer = selectedLayerNo;
    this.style.left = `${selectedLayerNo * 22}px`;
    this.style.top = `${selectedLayerNo * 48}px`;
}

function activateLayer() {
    this.removeEventListener('transitionend', activateLayer);
    const selectedLayer = this;
    if (selectedLayerNo === 3) return;

    selectedLayer.classList.add('category-active');
    selectedLayer.dataset.layer = '3';
    selectedLayer.style.left = '0px';
    selectedLayer.style.top = '0px';
}

function setLayerPosition(layer) {
    let layerNo = Number(layer.parentElement.dataset.layer);
    if (layerNo === 3) layerNo = 0;

    layer.parentElement.style.left = `${layerNo * 22}px`;
    layer.parentElement.style.top = `${layerNo * 48}px`;
}