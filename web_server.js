import http from 'http';
import * as fs from 'fs';


const host = 'localhost';
const port = 8000;

const homePage = fs.readFileSync('./views/home/home.html');
const homeStyles = fs.readFileSync('./views/home/home.css');


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if(req.url === '/home.css'){
    	res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else if(req.url === '/contact-me'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
        res.end();
    }
})


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});