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

    #### 达成目标的过程和目标本身同样重要

    * 剪切和粘贴成了编写Javascript脚本的代名词
    
    * #### javascript 平稳退化
    
    * JavaScript伪协议
    
    * 向CSS学习
    
      * 文档结构、文档样式分离
    
    
    
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

* sticky navigation

  * Intersection()API

  * 接收两个参数

    ```javascript
    var observer = new IntersectionObserver(callback[, options]);
    
    ```

    **callback**

    * 当元素可见比例超过指定阈值后，会调用一个回调函数，此回调函数接受两个参数

    **entries**

    * 一个[`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry)对象的数组，每个被触发的阈值，都或多或少与指定阈值有偏差。

    **observer**

    * 被调用的[`IntersectionObserver`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)实例。

    `options` 可选

    一个可以用来配置 observer 实例的对象。如果`options`未指定，observer 实例默认使用文档视口作为 root，并且没有 margin，阈值为 0%（意味着即使一像素的改变都会触发回调函数）。你可以指定以下配置：

    **root**

    监听元素的祖先元素[`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)对象，其边界盒将被视作视口。目标在根的可见区域的的任何不可见部分都会被视为不可见。

    **rootMargin**

    一个在计算交叉值时添加至根的边界盒 ([bounding_box (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Bounding_box)) 中的一组偏移量，类型为字符串 (string) ，可以有效的缩小或扩大根的判定范围从而满足计算需要。语法大致和 CSS 中的[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 属性等同; 可以参考 [intersection root 和 root margin](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) 来深入了解 margin 的工作原理及其语法。默认值是"0px 0px 0px 0px"。

    **threshold**

    规定了一个监听目标与边界盒交叉区域的比例值，可以是一个具体的数值或是一组 0.0 到 1.0 之间的数组。若指定值为 0.0，则意味着监听元素即使与根有 1 像素交叉，此元素也会被视为可见。若指定值为 1.0，则意味着整个元素都在可见范围内时才算可见。可以参考[阈值](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#thresholds)来深入了解阈值是如何使用的。阈值的默认值为 0.0。

  * ```javascript
    const obs = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });
    obs.observe(header);
    
    ```

  * callback function 

    * ```javascript
      const callback = function (entries) {
        const [entry] = entries;
        console.log(entry);
        if (entry.intersectionRatio === 0) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      };	
      ```

    * rootMargin

      * ```javascript
        const navHeight = nav.getBoundingClientRect().height;
        ```

        ![image-20230326093948248](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303260939416.png)

![image-20230326110753804](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303261107965.png)

####  *revealSection*

* 创建IntersectionObserver 接口

  * ```javascript
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    ```

  * 创建revealSection函数

    * ```javascript
      const revealSection = function (entries, observe) {
        const [entry] = entries;
        // console.log(entry);
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observe.unobserve(entry.target);
      };
      ```

  * options

    * ```json
      {root: null,
        threshold: 0.15,}
      ```

  * 遍历每一个sections

    * ```javascript
      allSections.forEach(section => {
        sectionObserver.observe(section);   调用接口的observe()
        section.classList.add('section--hidden');
      });
      ```

      

#### *lazy loading images*

* 也是使用接口

  * ```javascript
    const lazySectionObserve = new IntersectionObserver(lodingImag, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });
    ```

  * ```javascript
    
    const lodingImag = function (entries, observe) {
      const [entry] = entries;
      console.log(entry);
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;
      // entry.target.classList.remove('lazy-img');  不建议使用这种，网速慢的情况下，加载会很慢
      // 使用自带的load event， 我们只需要监听
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });
      observe.unobserve(entry.target);
    };
    
    ```

    * 调用observe()

      * ```javascript
        imageTarget.forEach(img => {
          lazySectionObserve.observe(img);
        });
        
        ```

  ####  *Slider*

   * 设置规则，默认显示图片

     * ```javascript
         const goToSlide = function (slide) {
           slider.forEach((slde, i) => {
             console.log(i);
             // console.log(currSlide);
             slde.style.transform = `translateX(${100 * (i - slide)}%)`;
           });
         };
       ```

   * 当图片滑到右边最后一张时，再点击箭头将跳转到第一张

     * ```javascript
         const goToNextSlide = function () {
           if (currSlide === maxSlide - 1) {
             currSlide = 0;
           } else {
             currSlide++;
           }
           goToSlide(currSlide);
           activeDot(currSlide);
         };
         btn_right.addEventListener('click', goToNextSlide);
       ```

   * 这个是反着的

     * ```
         const goToPrevSlide = function () {
           if (currSlide === 0) currSlide = maxSlide - 1;
           else currSlide--;
           goToSlide(currSlide);
           activeDot(currSlide);
         };
           btn_left.addEventListener('click', goToPrevSlide);
       
       ```

   * 键盘按下也能实现

     * ```javascript
         document.addEventListener('keyup', function (e) {
           //
           console.log(e.key);
       
           if (e.key === 'ArrowLeft') goToPrevSlide();
           // else if (e.key === 'ArrowRight') goToNextSlide();
           // shorting circuiting
           e.key === 'ArrowRight' && goToNextSlide();
         });
       ```

     * 创建dot

       * ```javascript
           const createDots = function () {
             slider.forEach((_, i) => {
               dots.insertAdjacentHTML(
                 'beforeend',
                 `<button class="dots__dot" data-slide="${i}"></button>`
               );
             });
           };
         
         ```

     * 激活

       * ```javascript
           const activeDot = function (slide) {
             document
               .querySelectorAll('.dots__dot')
               .forEach(dot => dot.classList.remove('dots__dot--active'));
             document
               .querySelector(`.dots__dot[data-slide="${slide}"]`)
               .classList.add('dots__dot--active');
           };
         ```

     * init 

       * ```javascript
           const init = function () {
             createDots();
             goToSlide(0);
             activeDot(0);
           };
         ```

       * init()

     * 把这些函数都用一个函数包含

       * ```javascript
         const sliderFunction = function () {....}
         ```

       * sliderFunction();

​                                                                                                                                                                                                                                                                                                                                                                                                                                                          

