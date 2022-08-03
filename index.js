var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomImgS1 = "dice" + randomNumber1 + ".png"
var rndIMG1 = "images/" + randomImgS1

var image1 = document.querySelectorAll("img") [0]

image1.setAttribute("src", rndIMG1)

// secand image 
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomImgS2 = "dice" + randomNumber2 + ".png"
var rndIMG2 = "images/" + randomImgS2

var image2 = document.querySelectorAll("img") [1]

image2.setAttribute("src", rndIMG2)


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win :)"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win :)"
} else {
    document.querySelector("h1").innerHTML = "Draw :("
}



