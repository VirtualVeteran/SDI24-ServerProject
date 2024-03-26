const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '' ) {
      if (request.method === 'GET') {
        response.end("Hello World");
        console.log("Server is running on ${CltAltDefeat}:${3000}")
      }
    }
    response.statusCode = 404;
    response.end();
  });


  server.listen(3000, "CltAltDefeat", () => {
    console.log(`Server running at http://localhost:3000/`);
  });