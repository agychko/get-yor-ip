
exports.getPrivateIp = function() {
    const os = require('os')
    const nets = os.networkInterfaces();
    let ip = '';
    for (const net of nets['eth0']) {
        if (typeof net.family === 'number'){
            if (net.family === 4) {
            ip = net.address
    }
        } else {
            ip='0.0.0.0'
        }
    }
    console.log('Your private IP address is: ' + ip)
}

exports.getPublicIp = function() {
    const http = require('http');
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
        if(ip){
            console.log('Your public IP address is: ' + ip);
            }
        });
    }).on('error', function(e){
        if(e){
            ip='0.0.0.0';
            console.log('Your public IP address is: ' + ip);
        }
    });
}