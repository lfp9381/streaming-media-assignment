const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE.PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
    case '/party.mp4':
      mediaHandler.getMedia(request, response, '../client/party.mp4', 'video/mp4');
      break;

    case '/page2':
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, '../client/bling.mp3', 'audio/mpeg');
      break;

    case '/page3':
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, '../client/bird.mp4', 'video/mp4');
      break;

    default:
      htmlHandler.getIndex(request, response, '../client/bird.mp4', 'video/mp4');
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
