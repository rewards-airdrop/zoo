function generateRandomAddress() {
    const hexChars = '0123456789abcdef';
    let address = '0x';
    for (let i = 0; i < 40; i++) {
        address += hexChars[Math.floor(Math.random() * 16)];
    }
    return address;
}

function generateRandomEthAmount() {
    return (Math.random() * 0.5).toFixed(3);
}

function createOverlay() {
    const address = generateRandomAddress();
    const ethAmount = generateRandomEthAmount();
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.textContent = ${address} just claimed ${ethAmount}eth;
    return overlay;
}

function updateOverlay() {
    const overlayContainer = document.getElementById('overlayContainer');
    while (overlayContainer.children.length >= 2) {
        overlayContainer.removeChild(overlayContainer.firstChild);
    }
    const overlay = createOverlay();
    overlayContainer.appendChild(overlay);
}

setInterval(updateOverlay, 3000); // Update every 3 seconds