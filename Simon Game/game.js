var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var Gamestarted = false;

$(document).keypress(() => {
  if (!Gamestarted) {
      gamePattern=[];
      level=0;
    Gamestarted = true;
    nextSequence();
  }
});


$(".btn").click(function () {
  var userChosenColour = $(this).attr("id"); // evt.target.id;

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        // console.log("success");

        if (userClickedPattern.length===gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            }, 1000);
        }
    }
    else{
        // console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        Gamestarted=false;
    }
}

function nextSequence() {

    userClickedPattern=[];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(() => {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}
