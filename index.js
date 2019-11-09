require('http').createServer(requestHandler).listen(process.env.PORT || 8080)

const fs = require('fs')

function requestHandler(req, resp){
    console.log(req.url)
    if (req.url == '/') req.url += 'index.html'
    try {
        resp.end(fs.readFileSync('./public' + req.url))
    } catch {
        resp.end('not found')
    }
    
}