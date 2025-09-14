const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE.PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        // Page 1 (Party)
        case '/':
        case '/page1':
            htmlHandler.getIndex(request, response, '../client/client.html', 'text/html')
            break;
        case '/party.mp4':
            mediaHandler.getMedia(request, response, '../client/party.mp4', 'video/mp4');
            break;

        // Page 2 (Bling)
        case '/page2':
            htmlHandler.getIndex(request, response, '../client/client2.html', 'text/html');
            break;
        case '/bling.mp3':
            mediaHandler.getMedia(request, response, '../client/bling.mp3', 'audio/mpeg');
            break;

        // Page 3 (Bird)
        case '/page3':
            htmlHandler.getIndex(request, response, '../client/client3.html', 'text/html')
            break;
        case '/bird.mp4':
            mediaHandler.getMedia(request, response, '../client/bird.mp4', 'video/mp4');
            break;

        // Default (Party)
        default:
            htmlHandler.getIndex(request, response, '../client/client.html', 'text/html');
            break;
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});
