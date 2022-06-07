
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
    console.log('Your private IP address is: ', ip)
}

exports.getPublicIp = function() {
const https = require('https');
https.get({
    host: 'api.ipify.org',
}, function(response) {
    let ip = '';
    response.on('data', function(d) {
        ip += d;
    });
    response.on('end', function() {
        if(ip){
            console.log('Your public IP address is: ', ip);
        } else {
            console.log('Your public IP address is: 0.0.0.0');
        }
    });
})
}