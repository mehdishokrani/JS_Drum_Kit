var buttonList = document.querySelectorAll("body > div > button");
for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})

// audio = new Audio("./sounds/tom-1.mp3");
// audio.play();

function makeSound(key){
    var path = "";
    switch (key){
        case "w":
            path = "./sounds/tom-1.mp3";
        break;
        case "a":
            path = "./sounds/tom-2.mp3";
        break;
        case "s":
            path = "./sounds/tom-3.mp3";
        break;
        case "d":
            path = "./sounds/tom-4.mp3";
        break;
        case "j":
            path = "./sounds/crash.mp3";
        break;
        case "k":
            path = "./sounds/snare.mp3";
        break;
        case "l":
            path = "./sounds/kick-bass.mp3";
        break;
        default:
            break;
      }
      audio = new Audio(path);
      audio.play();
}

function makeAnimation(keyPressed1){
    document.querySelector("."+keyPressed1).classList.add("pressed");
    setTimeout(
        function(){document.querySelector("."+keyPressed1).classList.remove("pressed")}, 100);
}