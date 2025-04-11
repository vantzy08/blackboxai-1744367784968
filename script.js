document.getElementById('generateLink').addEventListener('click', function() {
    const link = document.getElementById('linkInput').value;
    const trackingLink = `http://localhost:3000/track?url=${encodeURIComponent(link)}`;
    document.getElementById('trackingLink').innerText = `Your tracking link: ${trackingLink}`;
});
