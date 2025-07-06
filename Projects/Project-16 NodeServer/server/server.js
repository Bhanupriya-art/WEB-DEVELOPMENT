const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, (err, htmlData) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(htmlData);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});
server.listen(8080, () => {
    console.log("Server is running at http://localhost:8080");
});
