var index = 1
var tempImg = new Image()

//тут вызываем функцию appendImage()
tempImg.onload = function () {
  appendImage();
};

//присваиваем переменной tempImg путь нашего изображения с индексом index
function tryLoadImage(index) {
  tempImg.src = 'images/' + index + '.jpg'
}

//переменной img прсваиваем знач. tempImg и добавляем
function appendImage() {
  var imagelist = document.getElementById('imagelist');
  var img = document.createElement('img'); // создаем имя для тега
  img.src = tempImg.src;
  imagelist.appendChild(img); // присваиваем адрес нашей картинки переменной img.src
  tryLoadImage(++index)
  console.log("image was loaded \t" + index);
}


tryLoadImage(index);
