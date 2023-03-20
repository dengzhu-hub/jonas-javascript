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

* addEventListener(type, listener)

```javascript
以下是一些常见的DOM事件类型和对应的触发条件：

click：当用户单击一个元素时触发。

mouseover：当鼠标移动到一个元素上时触发。

mouseout：当鼠标从一个元素移出时触发。

mousedown：当鼠标按钮被按下时触发。

mouseup：当鼠标按钮被释放时触发。

keydown：当用户按下一个键时触发。

keyup：当用户释放一个键时触发。

focus：当元素获得焦点时触发。

blur：当元素失去焦点时触发。

change：当元素的值发生改变时触发（一般用于表单元素）。

submit：当用户提交表单时触发。

load：当文档或图像加载完成时触发。

resize：当窗口大小改变时触发。

scroll：当用户滚动文档时触发。
```
* 事件里面嵌套事件
```

// 事件监听可以嵌套监听，所以always use it；
const alertH1 = function (e) {
  alert('hi, do not click me, ok?');

}

h1.addEventListener('mouseenter', alertH1);
console.log('this is the word!');
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
  alert('I was destoried!')

}, 10000)
```

####  capturing and dubbling

![6DF0E35C43473494EB5BB48F4CA05162](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303201744869.png)
