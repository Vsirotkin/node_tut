const os = require('os');

// info about current user
const currentUser = os.userInfo();
console.log(currentUser);

// uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`);

// current os data
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);
