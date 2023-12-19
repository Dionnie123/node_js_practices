
import path from 'path';
import { fileURLToPath } from 'url';



function getFilename(metaUrl) {
  const __filename = fileURLToPath(metaUrl);

  return __filename;
}

function getDirname(metaUrl) {
  const __dirname = path.dirname(getFilename(metaUrl));

  return __dirname;
}


export {
  getFilename, getDirname
}

