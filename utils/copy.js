#!/usr/bin/env node
let fs = require('fs');
function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv) {
    new Promise((resolve, reject)=>{
        copy(argv[0], argv[1]);
        resolve()
    }).then(()=>{
        console.log(`copy.js has copyed ${argv[0]} to ${argv[1]}.`);
    }).catch(err=>{
        console.error(err);
    });
}
main(process.argv.slice(2));
