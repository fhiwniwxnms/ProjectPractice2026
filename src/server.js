const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http
  .createServer(function (request, response) {
    switch (request.url) {
      case "/":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.readFile("./src/pages/index.html", "utf-8", function (error, data) {
          response.end(data);
        });
        break;
      case "/transformer":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.readFile(
          "./src/pages/transformer.html",
          "utf-8",
          function (error, data) {
            response.end(data);
          },
        );
        break;
      case "/promts":
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.readFile("./src/pages/promts.html", "utf-8", function (error, data) {
          response.end(data);
        });
        break;
      case "/style.css":
        response.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
        fs.readFile("./src/pages/style.css", "utf-8", function (error, data) {
          response.end(data);
        });
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        response.end("Страница не найдена");
    }
  })
  .listen(3000, function () {
    console.log("Сервер запущен на порту 3000");
  });
