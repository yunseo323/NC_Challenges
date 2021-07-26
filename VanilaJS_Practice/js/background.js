const images=["1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //tag로 js에서 html element 생성하기

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);