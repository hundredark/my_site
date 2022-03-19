const crypto = require('crypto')

function returnInfo (errorInfo, data) {
  if (data) {
    errorInfo.data = data;
  }

  return errorInfo;
}

function makeCrypto (str) {
  const _md5 = crypto.createHash('md5'),
    content = `str=${str}&secret=${cryptoSecret}`;

  return _md5.update(content).digest('hex');
}

function trimSpace (str) {
  return str.replace(/\s+/g, '');
}

module.exports = {
  makeCrypto,
  trimSpace,
  returnInfo
}
