const axios = require('axios');

const testLink = 'http://example.com'; // Replace with any URL you want to test
const trackingLink = `http://localhost:3000/track?url=${encodeURIComponent(testLink)}`;

axios.get(trackingLink)
    .then(response => {
        console.log('Redirected to:', response.request.res.responseUrl);
    })
    .catch(error => {
        console.error('Error:', error);
    });
