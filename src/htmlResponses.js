const fs = require('fs'); // pull from the file system module

const getIndex = (request, response, filepath, filetype) => {
    const index = fs.readFileSync(`${__dirname}/${filepath}`);

    response.writeHead(200, { 'Content-Type': filetype });
    response.write(index);
    response.end();
};

module.exports.getIndex = getIndex;