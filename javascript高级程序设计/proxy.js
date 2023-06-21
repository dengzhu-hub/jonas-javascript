// 代理
const target = {
  id: "target",
  name: "jonas",
  age: 32,
};
const target1 = {
  id: "joasn",
  sex: "man",
  class: "junio",
};
const handler = {};
const proxy = new Proxy(target, handler);
// id属性会访问同一个值；
console.log(target.id);
console.log(proxy.age);
// 给代理对象赋值会反应在两个对象上；
proxy.id = "newTarget";
console.log(target.id);
console.log(proxy.id);
const proxy1 = new Proxy(target1, handler);
console.log(proxy1.id);
// 给目标属性复制会反应在两个对象上

target1.class = "class1";
console.log(target1.class);
console.log(proxy1.class);

// hasOwnProperty()方法在两个地方
// 都会应用到目标对象
console.log(target.hasOwnProperty("id"));
console.log(proxy.hasOwnProperty("id"));

// proxy.prototype 是undefined
//因此不能使用instanceof
//   console.log(target instanceof Proxy);
//   console.log(proxy instanceof Proxy);

console.log(target === proxy);
// console.log(target == proxy);
// 定义捕获器
// trap
const targetTrap = {
  foo: "bar",
};
const handlerTrap = {
  get() {
    // 捕获器在处理程序对象中以方法名为健
    return "handler override";
  },
};
const proxyTrap = new Proxy(targetTrap, handlerTrap);

console.log(targetTrap.foo);
console.log(proxyTrap.foo);
console.log(targetTrap['foo']);
console.log(proxyTrap['foo']);
console.log(Object.create());


