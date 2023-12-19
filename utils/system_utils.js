
import os from 'os';
import convert from 'convert-seconds';

const systemUptime = convert(os.uptime()) ;

const userInfo = os.userInfo();

const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


export {
  systemUptime, userInfo, otherInfo
}

