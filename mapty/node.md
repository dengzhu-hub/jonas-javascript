# mapty

#### 分为 4 部分

 ![IMG_1365](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051406627.PNG)

- ![image-20230505140729405](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051407760.png)
- ![IMG_1366](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051417663.PNG)

#### 编码

#### golocation

- ```javascript
  navigator.golocation.getCurrentLocation(successCallback, errorCallback);
  ```

- eg

  - ```javascript
    navigator.geolocation.getCurrentPosition(
      function successCallback(position) {
        console.log(position);
  
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude, longitude);
      },
      function errorCallback() {
        alert('cound not found!');
      }
    );
    ```

- 运行,成功就会询问我们位置

  - ![image-20230505145203200](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051452339.png)
  - <img src="https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051453383.png" alt="image-20230505145324329"  />

- 失败的话

  - ![mn](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305051454515.png)

### leaflet

##### 开始

```javascript
const coords = [29.9999233, 106.1372669];
map = L.map('map').setView(coords, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> cont ributors',
}).addTo(map);
map.on('click', onMapClick);
```

display mark

```javascript
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //Clear input fields
  // inputCadence.value =
  //   inputDistance.value =
  //   inputElevation.value =
  //   inputDuration.value =
  //     '';
  form.reset();
  //display marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
        .setLatLng(mapEvent.latlng)
        .setContent('You clicked the map at ' + mapEvent.latlng.toString())
    )
    .openPopup();
});
```

inputtype

```javascript
inputType.addEventListener('change', function (event) {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
```
