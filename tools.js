const http = require('http');

const startListener = () => {
    handle = (req, res) => console.log(req)
    server = http.createServer(handle)
    server.listen(proccess.env.PORT || 5000) 
};

module.exports = {
    startListener: startListener
}