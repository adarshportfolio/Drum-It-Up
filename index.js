var numberOfDrumButtons = document.querySelectorAll(".drum").length; //dont forget All from querySelectAll


// Detecting screen button press
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked");

        // this -->corresponds to queryselector[i]
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 

        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting keyboard press by using the keydown listener
document.addEventListener("keydown",function (event){
    makeSound(event.key);
    // .key is a keyword for sending the key part from the presses key in the keyboard
    // event is like an obj that is returning after keypress and from this object we only need the key part which is the alphabet. 

    buttonAnimation(event.key);
});

// Common function for playing sound for both keyboard & screen press
function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'd':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'j':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'k':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

//Function to create a flash animation when the button is pressed or clicked
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey); //querySelector(".class")

    // required css is in the styles page inside .pressed class
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
