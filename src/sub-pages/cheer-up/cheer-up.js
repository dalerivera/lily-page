var photoFilenames = [
new URL('cheer-up-photos/62f9719caac2fa1401b208606af14995.jpg', import.meta.url),
new URL('cheer-up-photos/69d82717-e461-498f-9761-b50e20240d21.jpeg', import.meta.url),
new URL('cheer-up-photos/88f054c2b7df53cfa161b3ea07ea5b70.jpg', import.meta.url),
new URL('cheer-up-photos/d7577c5057bde5cd315da9793b.png', import.meta.url),
new URL('cheer-up-photos/Dogs-make-us-smile-everyday-this-is-my-tribute-to-them-5e75229e95b57__880.jpg', import.meta.url),
new URL('cheer-up-photos/dogs-photography-mia-tepelea-fb7.png', import.meta.url),
new URL('cheer-up-photos/fc305d0cb66e9b9766a1122fecf07218b8bec7c26fbeeb0e2bc9db9b7a94e926.jpg', import.meta.url),
new URL('cheer-up-photos/pomeranian-dog-breed-info_0.jpg', import.meta.url),
new URL('cheer-up-photos/smiling-dog-dog-memes-to-cheer-you-up-ss-FEATURE-.jpg', import.meta.url)
]
var gallery = document.querySelector('.gallery');

photoFilenames.forEach((filename) => {
  var p = document.createElement('p');

  var img = document.createElement('img');
  img.src = filename;
  gallery.appendChild(img);
});