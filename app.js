const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Kubernetes via Jenkins 🚀");
});

server.listen(3000);

