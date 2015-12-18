$(document).ready(function(){
	console.log("It works ")


var red;
var blue;
var yellow;
var green;
var colors;
var count;
var startcolors;
var sequenceArray;
var waitFlag;
var startFlag;
var sequenceIndex;
var sequenceCount;
var roundCount;
var sound1;
var sound2;
var sound3;
var sound4;
var sounds;

//device lighting up one or more buttons in a random order




		
function initialize(){
  console.log("initialize");
  red = "rgba(255,0,0, .3)";
  blue = "rgba(0,0,128, .3)";
  yellow = "rgba(255,255,0, .3)";
  green = "rgba(0, 255, 0, .3)";
  colors = [[red,$('.red')], [blue,$('.blue')], [yellow, $('.yellow')], [green, $('.green')]];
  count = 0;
  startcolors = ['red', 'blue', 'yellow',  'green'];
  sequenceArray= [Math.floor( Math.random() * colors.length )];
  waitFlag = true;
  startFlag = true;
  sequenceIndex =0;
  sequenceCount =0
  roundCount = 0;
  sound1 = new Audio('sounds_01.mp3');
  sound2 = new Audio( 'sounds_02.mp3' );
  sound3 = new Audio( 'sounds_03.mp3' );
  sound4 = new Audio( 'sounds_04.mp3' );
  sounds = [sound1, sound2, sound3, sound4];
}

	function displayColor (){
		startFlag = false;

		var colorIndex = sequenceArray[count]
		console.log(colorIndex);
		var colorObject = colors[colorIndex][0];
		var colorDiv = colors[colorIndex][1];

		//console.log(colors[colorIndex]);
		var style = {
            backgroundColor : colorObject
    		};
		console.log(sounds[colorIndex]);
		sounds[colorIndex].play();
		colorDiv.css(style);
		if(count === sequenceArray.length -1){
			colorDiv.css(style);
			setTimeout(function(){
				colorDiv.css({ backgroundColor : startcolors[colorIndex]})
			},800)

			 waitFlag = false;
				return ;
		}
		setTimeout(displayColor, 1600);
		setTimeout(function(){
			$(colorDiv).css({ backgroundColor : startcolors[colorIndex]})
		},1500)
		count++;

	}

	function createColors(number){
		/*for (var i = 0; i < number; i++) {
			var colorIndex = Math.floor(Math.random() * 4);
			sequenceArray.push[i]
		};*/
		var colorIndex = Math.floor(Math.random() * 4);
		sequenceArray.push(colorIndex)

	}
  //The player must match the correct color sequence for the game to continue onto the next turn.
   function checkMatch (){
   	if(waitFlag){		
   	}else{
   	var sequenceColor = colors[sequenceArray[sequenceIndex]][1].attr('class');
    var thisColor = colors[sequenceArray[sequenceIndex]][0];
   	var thisClass = $(this).attr('class');
   	var thisInex = startcolors.indexOf(thisClass);
   	var style = {
            backgroundColor : thisColor
    		};

	var $this = $(this);
	$(this).css(style);
   	console.log(thisInex);
   	sounds[thisInex].play();

	setTimeout(function(){
		console.log($this.css({ backgroundColor : startcolors[thisInex]}));
   $this.css({ backgroundColor : startcolors[thisInex]})
   },800);
	   	if (waitFlag){

	   	}else {

	   		if ( thisClass == sequenceColor){
	   			sequenceIndex++;

	   			if(sequenceIndex ===  sequenceArray.length  ){
	   				count = 0;
	   				roundCount++;
	   				sequenceIndex = 0;
	   				waitFlag = true;
	   				createColors();
	   				displayRound();
	   				setTimeout(function(){
	   					displayColor();
	   				},2000);

	   			}

	   		}else{

	   			endGame();
	   			startFlag = true;
	   		}
	   	  }
	   	}
	}
		

  function endGame(){
  	alert("Wrong color, Game Over!")
    initialize();
    displayRound();
  }

	function starGame(){

		
			console.log("it works")
        initialize();
		console.log('buton works')
		createColors();
		displayColor();
		
	}

	function displayRound(){

		console.log('round works')
		$('span').text(roundCount)

	}



	$('.red').on("click", checkMatch);

	$('.blue').on("click", checkMatch);

	$('.yellow').on("click", checkMatch);

	$('.green').on("click", checkMatch);

	$('#start').on("click", starGame);






 /*   	function playgame (){
  		var x = 0;
  		while(x < 10) {

  			displayColor(count);
  			X++;
  			//sleep(2000);

			if (playerChoice.length >= 3){
	   			console.log("we have 3 clicks")
	   			if( checkMatch() ){
	   				clearData();
	   			}else {
	   				alert('Game Over!')
	   				stillPlaying = false;
	   				 return 10;
	   			}
	   		}

  		}


	 //}
	// playgame();

    	setInterval(function(){
    		displayColor(count);
    		if (playerChoice.length >= 3){
	   			console.log("we have 3 clicks")
	   			if( checkMatch() ){
	   				clearData();
	   			}else {
	   				alert('Game Over!')
	   				stillPlaying = false;
	   				 return 10;
	   			}
    	}
    },10000)
    	*/


 // player must reproduce that order by pressing the buttons

//game progresses, the number of buttons to be pressed increases.

});
