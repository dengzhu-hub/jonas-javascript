# 笔记

## 选择器
* querySelector() 返回单个对象
* querySelectorAll() // 返回类数组nodeList()
* getElementById()
* getElementsByTagName()
* getElementsByClassName()
### 举例
```javascript
const header = document.querySel('.header');
console.log(header);
const  allSections = document.querySelectorAll('.section');
```
## 创建元素
* createElement()
* insertAdjacentHTML()
* innerHTML()
* append()
* prepend()
* appendChild()
### 举例
```javascript
const message = document.createElement('div'); //现在我是一个文档碎片， 还是javascript里面的孤儿。但是拥有Dom属性了
console.log(message.nodeType);

 message.classList.add('cookie-message');
message.innerHTML = 'we use cookie for improved functionality and analytics <button class="btn btn--close-cookie">Got it</button>';
header.append(message);  //作为子元素
// header.prepend(message.cloneNode(true));
//header.before(message);  //这样就是header的兄弟了，在他前面显示
//header.after(message);   //这样就是header的兄弟了，在他后面显示
```

## Dom
-----
### 标记
