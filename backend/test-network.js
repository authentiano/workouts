const dns = require('dns');
const host = '_mongodb._tcp.mernapp.gcu8hzx.mongodb.net';

console.log(`Resolving SRV for ${host}...`);

dns.resolveSrv(host, (err, addresses) => {
    if (err) {
        console.error('SRV Lookup failed:', err);
    } else {
        console.log('SRV Lookup successful:', addresses);
    }
});
