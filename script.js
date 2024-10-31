function showInteraction() {
    document.getElementById('interactiveSection').classList.remove('hidden');
    document.getElementById('acceptButton').classList.add('hidden');
}

function sendVirtualHug() {
    document.getElementById('responseSection').classList.remove('hidden');
    document.getElementById('interactiveSection').classList.add('hidden');
}

function initiateFlowers() {
    console.log("initiateFlowers called");
    alert("Initiating Flowers!");
    window.open('https://tinyurl.com/flowersforroms1', '_blank'); 
}
