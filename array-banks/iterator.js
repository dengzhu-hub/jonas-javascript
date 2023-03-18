for (let i = 1; i < 10; i++) {
    console.log(i);
    
}
let collection = ['foo', 'bar', 'baz'];
for (let index = 0; index < collection.length; index++) {
    console.log(collection[index]);
    
}
collection.forEach((item) => console.log(item)
);
let arr = [1, 4, 5];
let set = new Set().add(3).add(1).add(4);
console.log(set[Symbol.iterator]);
console.log(arr[Symbol.iterator]);
let num = 1;
const obj = {};
console.log(num[Symbol.iterator]);
let str = 'jonas';
console.log(str[Symbol.iterator]);
for (const value of arr) {
    console.log(value);
    
}
let [a, b,c ] = arr;
console.log(a,  b,c);
let arrs = [...arr];
console.log(arrs);
console.log(arr);

const arrNew = [6, ...arr];
console.log(arrNew);
let paris = new Map().set(1,'jonas');
console.log(paris);
console.log(paris.size);
let maps = new Map([[1, 'jonas'],['age',24]]);
console.log(maps);
for (const key of maps.keys()) {
    console.log(key);
    
}
arr.push(3);
arr.unshift(43)
arr.pop()
console.log(arr);
for (const property in window) {
    document.write(property)
}


console.log('nihao1');

let arrays = ['foo', 'bar'];
console.log(arrays[Symbol.iterator]);
let iter = arrays[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());















