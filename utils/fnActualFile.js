const fs = require('fs');

function replaceStr(contentStr, replaceStrPairsObj) {
    const contentStrCheckedType = Object.prototype.toString.call(contentStr);
    if (contentStrCheckedType !== "[object String]") {
        console.dir(contentStrType);
        console.error('Above is the argument contentStr in replaceStr function, it must be as str, but others got: ' + contentStrCheckedType);
    }

    for (key in replaceStrPairsObj) {
        if (replaceStrPairsObj.hasOwnProperty(key)) {
            while (contentStr.indexOf(key) !== -1) {
                contentStr = contentStr.replace(key, replaceStrPairsObj[key]);
            }
        }
    }
    return contentStr;
}

function handleBuffer(contentBuffer, replaceStrPairsObj) {
    const contentStr = contentBuffer.toString('utf-8');
    let replacedStr = replaceStr(contentStr, replaceStrPairsObj);
    let handledBuffer = new Buffer(replacedStr, 'utf-8');
    return handledBuffer;
}

module.exports = function (sourceStr, distinationPath, replaceStrPairsObj) {
    let replacedStr = replaceStr(sourceStr, replaceStrPairsObj);
    return function () {
        fs.writeFileSync(distinationPath, replacedStr);
    }
};