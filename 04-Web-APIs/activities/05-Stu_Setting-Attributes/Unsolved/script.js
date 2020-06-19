var imgTag = document.querySelectorAll("img");
var hrefTag = document.querySelectorAll("href");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelectorAll("img");
var changeP = document.querySelector("#change2");




for (var i = 0; i < imgTag.length; i++) {
    imgTag[i].setAttribute("src", "https://html.com/wp-content/uploads/very-large-flamingo.jpg");
    imgTag[i].setAttribute("alt", "flamingo");
    imgTag[i].setAttribute("style", "padding: 10px");
    imgTag[i].setAttribute("style", "width: 50%");
  }

  for (var i = 0; i < hrefTag.length; i++) {
    hrefTag[i].setAttribute("a");
  }