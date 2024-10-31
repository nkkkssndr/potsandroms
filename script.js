function showInteraction() {
    document.getElementById('interactiveSection').classList.remove('hidden');
    document.getElementById('acceptButton').classList.add('hidden');
}

function sendVirtualHug() {
    document.getElementById('responseSection').classList.remove('hidden');
    document.getElementById('interactiveSection').classList.add('hidden');
}

function startMovie() {
    alert("Initiating Flowers!");
    console.log("Flowers button initiated!");
    window.location.href = 'https://www.google.com';
}
