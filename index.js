import * as FileUtils from './utils/file_utils.js';
import * as SystemUtils from './utils/system_utils.js';
import greet from './utils/dionnie_utils.js';

//Global Variable
global.myCart = 69;
console.log(myCart);

//File Utils
const __filename = FileUtils.getFilename(import.meta.url);
const __dirname = FileUtils.getDirname(import.meta.url);
console.log(__filename);
console.log(__dirname);

//Sytem Utils
console.log(SystemUtils.systemUptime);
console.log(SystemUtils.userInfo);

//My custom module
greet('Mark Dionnie');







