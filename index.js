for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function() {
    // this.style.color="white";
    var buttonclicked=this.innerHTML;
    makesound(buttonclicked);
    buttonAnimation(buttonclicked);
});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(k)
{
    switch(k){
        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio=new Audio("sounds/tom-7.mp3");
        audio.play();
        break;
        case "j":
        var audio=new Audio("sounds/tom-5.mp3");
        audio.play();
        break;
        case "k":
        var audio=new Audio("sounds/tom-6.mp3");
        audio.play();
        break;
        case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        default:
        console.log(buttonclicked);
        break;
        }
}
function buttonAnimation(k){
    document.querySelector("."+k).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+k).classList.remove("pressed");
    },100);
}