const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const numbers = [10, 20, 30, 40, 50];
const server = http.createServer((req, res) => {
    const min = Math.min(...numbers);
const max = Math.max(...numbers);
let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let avg = sum/numbers.length;
if (req.method === "GET" && req.url === "/all") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const obj = {
        data:numbers
    }
    res.end(JSON.stringify(obj));
} else if (req.method === "GET" && req.url === "/min-max") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    //const min = Math.min(...numbers);
    //const max = Math.max(...numbers);
    const obj = {
        min:min,
        max:max
    }
    res.end(JSON.stringify(obj));
} else if (req.method === "GET" && req.url === "/sum-avg") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    /*let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let avg = sum/numbers.length;*/
    const obj = {
        sum:sum,
        average:avg
    }
    res.end(JSON.stringify(obj));
}
 else if (req.method === "GET" && req.url === "/stats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    /*const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let avg = sum/numbers.length;*/
    const obj = {
        min:min,
        max:max,
        sum:sum,
        average:avg
    }
      res.end(JSON.stringify(obj));
} else if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello!');
     } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
     }
});
server.listen(port, hostname, () => {
console.log(`Server is running at http://${hostname}:${port}/`);
});