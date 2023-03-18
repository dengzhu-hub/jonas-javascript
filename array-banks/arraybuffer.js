'use strict';
// Float32Array
// 会将所有二进制初始化为0
// ArrayBuffer 会自动进行垃圾回收，不用手动释放
const buf = new ArrayBuffer(16);
console.log(buf);
const buf2 = buf.slice(4, 12);
console.log(buf2);  //Number.MAX_SAFE_INTEGER(2 ^ 53 - 1);


//DataView
const dataBuf = new ArrayBuffer(16);
// DataView 会默认使用整个buffer
const fullDataView = new DataView(dataBuf);
console.log(fullDataView);
console.log(fullDataView.byteOffset);
console.log(fullDataView.byteLength);
console.log(fullDataView.buffer === dataBuf);
//构造函数接受一个可选的默认字节偏移量和字节长度；
// byteOffset = 0 表示视图从缓冲起点开始

// byteLength = 8 表示限制视图为前8；

const firstHalfDataView = new DataView(dataBuf, 2, 13);
console.log(firstHalfDataView.byteOffset);
console.log(firstHalfDataView.byteLength);
// alert(firstHalfDataView.buffer === dataBuf);
const secondHalfDataView = new DataView(dataBuf, 8);
console.log(secondHalfDataView.byteOffset);
console.log(secondHalfDataView.byteLength);
console.log(secondHalfDataView.buffer === dataBuf);




