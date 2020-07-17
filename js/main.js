'use strict';

(function () {
  var DESCRIPTION = ['мое первое фото', 'КРАСАВА!!!', 'Если друг оказался вдруг...', 'Что-то странное...', 'Русь-Матушка', 'КРАСИВО ТО КАК!!!', 'Ой что-то будет!', 'Долгожданный отпуск', 'мое первое фото', 'КРАСАВА!!!', 'Если друг оказался вдруг...', 'Что-то странное...', 'Русь-Матушка', 'КРАСИВО ТО КАК!!!', 'Ой что-то будет!', 'Долгожданный отпуск', 'мое первое фото', 'КРАСАВА!!!', 'Если друг оказался вдруг...', 'Что-то странное...', 'Русь-Матушка', 'КРАСИВО ТО КАК!!!', 'Ой что-то будет!', 'Долгожданный отпуск', 'Долгожданный отпуск'];
  var MESSAGE = ['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var NAME = ['Артем', 'Масяня', 'Федручио', 'Аристотель', 'Гай Юлий Цезарь', 'Анюта'];
  var comments = [];
  var arrObjects = [];

  var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var createComment = function () {
    var comment = {
      avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
      message: MESSAGE[getRandomIntInclusive(1, 6)],
      name: NAME[getRandomIntInclusive(1, 6)]
    };
    return comment;
  };

  var createArrayComments = function () {
    for (var i = 0; i < getRandomIntInclusive(1, 6); i++) {
      comments.push(createComment());
    }
    return comments;
  };

  var getDescriptionPhoto = function (index) {
    var objectPhoto = {
      url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
      description: DESCRIPTION[index],
      likes: getRandomIntInclusive(15, 200),
      comments: createArrayComments()
    };
    return objectPhoto;
  };

  for (var i = 0; i < 25; i++) {
    arrObjects.push(getDescriptionPhoto(i));
  }

  var pictures = document.querySelector('.pictures');
  var picture = document.querySelector('#picture').content.querySelector('.picture');
  var pictureImg = picture.querySelector('.picture__img');
  var pictureLikes = picture.querySelector('.picture__likes');
  var pictureComments = picture.querySelector('.picture__comments');

  var createElement = function (object) {
    var element = picture.cloneNode(true);
    pictureImg.src = object.url;
    pictureLikes.textContent = object.likes;
    pictureComments.textContent = object.comments;
    return element;
  };


  var fragment = document.createDocumentFragment();

  for (var j = 0; j < arrObjects.length; j++) {
    var newElement = createElement(arrObjects[j]);
    fragment.appendChild(newElement);
  }
  pictures.appendChild(fragment);
})();
