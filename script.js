function showInteraction() {
    document.getElementById('interactiveSection').classList.remove('hidden');
    document.getElementById('acceptButton').classList.add('hidden');
}

function sendVirtualHug() {
    document.getElementById('responseSection').classList.remove('hidden');
    document.getElementById('interactiveSection').classList.add('hidden');
}

function startMovie() {
    alert("Starting the movie!");
}
