// 画像を切り替える
function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("image1.jpg")) {
    image.src = "image2.jpg";
  } else {
    image.src = "image1.jpg";
  }
}
