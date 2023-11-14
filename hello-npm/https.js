import { createServer} from 'http';

createServer(function (req, res){
    res.write('hello world descomplica !');
    res.end()
}).listen(8080);