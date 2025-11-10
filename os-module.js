const os = require('os');

const osVersion = os.version();




const osInfo = {
    platform: os.platform(),
    cpuArch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osVersion);
console.log(osInfo);