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

//initializes the games state
		
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
  sequenceIndex =0;
  sequenceCount =0
  roundCount = 0;
  sound1 = new Audio('sounds_01.mp3');
  sound2 = new Audio( 'sounds_02.mp3' );
  sound3 = new Audio( 'sounds_03.mp3' );
  sound4 = new Audio( 'sounds_04.mp3' );
  sounds = [sound1, sound2, sound3, sound4];
}
	//Displays the color sequence

	function displayColor (){
	

		var colorIndex = sequenceArray[count]
		console.log(colorIndex);
		var colorObject = colors[colorIndex][0];
		var colorDiv = colors[colorIndex][1];

		var style = {
            backgroundColor : colorObject
    		};
		//Plays the sound for that color
		sounds[colorIndex].play();
		//changes the background
		colorDiv.css(style);
		//if last color in the array it exits
		if(count === sequenceArray.length -1){
			colorDiv.css(style);
			setTimeout(function(){
				colorDiv.css({ backgroundColor : startcolors[colorIndex]})
			},800)

			 waitFlag = false;
				return ;
		}
		// contiunes to call the displayColor every one and half seconds
		setTimeout(displayColor, 1500);
		setTimeout(function(){
			$(colorDiv).css({ backgroundColor : startcolors[colorIndex]})
		},1300)
		count++;

	}

	function createColors(){		
		var colorIndex = Math.floor(Math.random() * 4);
		sequenceArray.push(colorIndex)
	}

  //checks if player matched the correct color sequence for the game to continue.
   function checkMatch (){
  	if(waitFlag){	// if the the colors are displaying can't click 	
   	}else{//flashes the color the user clicks on and plays the sound 
   	var sequenceColor = colors[sequenceArray[sequenceIndex]][1].attr('class'); //finds the class of the color in the sequenceArry
    var thisColor = colors[sequenceArray[sequenceIndex]][0];// saves the backgound color that needs to be flash 
   	var thisClass = $(this).attr('class')// gets the class of the Div whick got click
   	var thisInex = startcolors.indexOf(thisClass);//finds and save the index number of the div clicked
   	var style = { //create the style objectf of the backgound color
            backgroundColor : thisColor
    		};

	var $this = $(this);
	$(this).css(style);//changes the backgound color of the div clicked
   	sounds[thisInex].play();//plays the sound for the color which was clicked

	setTimeout(function(){//changes the color back to the original color after 800 milliseconds
		console.log($this.css({ backgroundColor : startcolors[thisInex]}));
   $this.css({ backgroundColor : startcolors[thisInex]})
   },800);	  

   		if ( thisClass === sequenceColor){ //checks to see if they matched the sequence
   			sequenceIndex++;//incuments the index

   			if(sequenceIndex ===  sequenceArray.length  ){//if at the end of the sequence
   				count = 0; // resets the counter for the displayColor()
   				roundCount++;// adds one the round counter
   				sequenceIndex = 0; // resets sequence index
   				waitFlag = true; // makes it so the user can't click the dis
   				createColors();
   				displayRound();
   				setTimeout(function(){//waits one second  then starts to display the color sequence again
   					displayColor();
   				},1000);
   			}

   		}else{// if the div the user clicked on is not a match it ends the game
   			endGame();
   			startFlag = true;
   		}	   	  
      }
	}		

  function endGame(){// function to end the game reinitalize the game back to its original state
  	alert("Wrong color, Game Over!")
    initialize();
    displayRound();
  }

	function starGame(){	// starts the game by displaying the color sequence 
		console.log("it works")
        initialize();
		console.log('buton works')
		createColors();
		displayColor();
		
	}

	function displayRound(){// changes the text in the span div to the current round
		console.log('round works')
		$('span').text(roundCount);
	}



	$('.red').on("click", checkMatch); // calls the checkMatch when clicked 

	$('.blue').on("click", checkMatch); // calls the checkMatch when clicked 

	$('.yellow').on("click", checkMatch); // calls the checkMatch when clicked 

	$('.green').on("click", checkMatch); // calls the checkMatch when clicked 

	$('#start').on("click", starGame); // calls the checkMatch when clicked 




});//end of document.ready
