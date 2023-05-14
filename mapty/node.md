# mapty

#### 分为4部分

​	![IMG_1365](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051406627.PNG)

* ![image-20230505140729405](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051407760.png)
* ![IMG_1366](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051417663.PNG)

#### 编码

#### golocation

* ```javascript
  navigator.golocation.getCurrentLocation(successCallback, errorCallback);
  ```

* eg

  * ```javascript
    navigator.geolocation.getCurrentPosition(function successCallback(position) {
        console.log(position);
        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
        
    
    }, function errorCallback() {
        alert('cound not found!')
    });
    
    
    ```

* 运行,成功就会询问我们位置

  * ![image-20230505145203200](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051452339.png)
  * <img src="https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051453383.png" alt="image-20230505145324329"  />

* 失败的话

  * ![mn](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051454515.png)



### leaflet

##### rendering workout input form

