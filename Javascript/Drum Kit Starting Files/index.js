function fun(key){
    switch(key){
        case 'w':
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kickBass=new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 's':
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(key);
    }
}
function anim(key){
    var pressedKey=document.querySelector('.'+key);
    pressedKey.classList.add("pressed");

    setTimeout(() => {
    pressedKey.classList.remove("pressed");
    }, 100);
}
for (var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", ()=>{
        var temp=this.innerHTML;
        fun(temp);
        anim(temp);
    });
    
}
document.addEventListener("keypress", (event)=>{
    var temp=event.key;
    fun(temp);
    anim(temp);
});
