![IMG_1270(20230305-114235)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303232101086.JPG)

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

* 举例
  * ![](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303211106361.png)

  * ```javascript
    nav_link.addEventListener('click', function (e) {
      console.log('LINK', e.target);
      this.style.backgroundColor = randomColor();
      
      
    })// 子元素可以捕获父元素，父元素不能捕获子元素。
    nav_links.addEventListener('click', function (e) {
      console.log('Linked', e.target);
      this.style.backgroundColor = randomColor();
      
      
    })
    nav.addEventListener('click', function (e) {
      console.log('Linkeing', e.target);
      this.style.backgroundColor = randomColor();
    
      
    })  我们可以将捕获设置为true，就能捕获了。
    ```

  * 解释捕获和冒泡：

    * JavaScript 的捕获和冒泡指的是事件传播的两个不同阶段，当事件在文档对象模型（DOM）中的元素上触发时会发生。

      在捕获阶段，事件从 DOM 层次结构中的最顶层元素开始，并向下移动到目标元素。在此阶段，目标元素的每个祖先元素都有机会在到达目标元素之前处理事件。可以通过在添加事件侦听器时将 `useCapture` 参数设置为 `true` 来启用此阶段，但这是可选的。

      在冒泡阶段，事件从目标元素开始，并向上移动到顶层元素。在此阶段，目标元素被处理后，每个祖先元素都有机会处理事件。这是事件传播的默认行为。

      例如，假设我们有一个嵌套在父级 div 元素中的 div 元素，并单击内部 div。在捕获阶段中，事件将从最顶层元素（文档元素）开始向下移动，直到到达内部 div。在此阶段中，内部 div 的任何祖先元素都有机会处理事件。在冒泡阶段中，事件将从内部 div 开始向上移动，直到到达文档元素。在此阶段中，内部 div 的任何祖先元素也都有机会处理事件。

* 阻止(*stopPropagation*)

  * ```javascript
    e.stopPropagation(); // 应该不使用这个
    ```

  * 随机产生一个颜色

    * ```javascript
      // RGBA();
      const randomInt = (min, max) => Math.floor(Math.random() * (max - min +1) + min);
      const randomColor = () => `rgba(${randomInt(0, 255)}, 
      ${randomInt(0, 255)},
      ${randomInt(0, 255)})`;
      console.log(randomColor());
      
      ```

  * Dom元素和方法
  
    * childNodes
  
    * nodeValue
  
    * nodeType
  
    * firstChild
  
    * lastChild
  
    * lastElementChild
  
    * firstElementChild
  
    * children
  
    * 举例
  
      * ```javascript
        
        const h1s  = document.querySelector('h1');
        console.log(h1s.childNodes[0].nodeValue); //本身文本h1
        
        console.log(h1s.nodeType);
        
        const h1Text = h1s.firstChild.nodeValue;
        console.log( h1Text);
        
        console.log(h1s.firstElementChild.style.color = 'white');
        
        console.log(h1s.childNodes);
        console.log(h1s.children) // 在direct children 有效
        
        ```
  
        * going upwards
        
        * ```javascript
          
          console.log( h1s.parentElement.children);
          console.log( h1s.parentNode.childNodes);// 
          h1s.closest('h1') .style.backgroundImage = 'var( --gradient-secondary)'
          
          
          //going sideways: siblings
          
          console.log(h1s.previousElementSibling);
          console.log(h1s.nextElementSibling);
          console.log(h1s.nextSibling);
          console.log(h1s.previousSibling);
          
          
          ```
        
        * ![image-20230323223946050](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303232239116.png)
        
    
    * going sideways: siblings
    
      * ```javascript
        console.log(h1s.previousElementSibling);
        console.log(h1s.nextElementSibling);
        console.log(h1s.nextSibling);
        console.log(h1s.previousSibling);
        
        ```
    
      * ![image-20230323224047546](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303232240582.png)

* tab operation 
  * ![image-20230323224146338](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303232241381.png)

```javascript
tab_containers.addEventListener('click', function (e) {
  e.preventDefault();
  const click = e.target.closest('.operations__tab');
  console.log(click);
  // guard clasue
  if (!click) return;
  // active  tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  contents.forEach(t => t.classList.remove('operations__content--active'));
  click.classList.add('operations__tab--active');
console.log(click.getAttribute('data-tab'));
    console.log(click.dataset.tab);

  // active content area
  document.querySelector(`.operations__content--${click.getAttribute('data-tab')}`).classList
  .add('operations__content--active');
 


})
```

* 导航栏淡化

  * ```javascript
    // Menu fade animation
    const hinderHover = function (e, opacity) {
      const link = e.target;
      // console.log(this, e.currentTarget);
      
      if (link.classList.contains('nav__link')) {
        const slbing = nav_link.closest('.nav').querySelectorAll('.nav__link');
        console.log(slbing);
        
        const logo = nav_link.closest('.nav').querySelector('img');
        console.log(logo);
        slbing.forEach(li => {
          if (li !== link) li.style.opacity = this;
        });
        logo.style.opacity = this;
        
    
      }
    
    }
    // use bind method is the better way doing this
    nav.addEventListener('mouseover', hinderHover.bind(0.5) );
    nav.addEventListener('mouseout', hinderHover.bind(1));
    
    
    ```

  * 把鼠标放在导航栏上，其他导航栏会淡化

  * ![image-20230323224623218](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303232246258.png)
