$(document).ready(function(){
	console.log("It works ")


//device lighting up one or more buttons in a random order
var red = "rgba(255,0,0, .3)"
var blue = "rgba(0,0,128, .3)"
var yellow = "rgba(255,255,0, .3)"
var green = "rgba(0, 255, 0, .3)"
var colors = [[red,$('.red')], [blue,$('.blue')], [yellow, $('.yellow')], [green, $('.green')]];
var count = 0;
var startcolors = ['red', 'blue', 'yellow',  'green'];
var sequenceArray=[1];
var waitFlag = true;
var sequenceIndex =0;
var sequenceCount =0
var sound1 = new Audio('sounds_01.mp3'); 
var sound2 = new Audio( 'sounds_02.mp3' );
var sound3 = new Audio( 'sounds_03.mp3' );  
var sound4 = new Audio( 'sounds_04.mp3' ); 
var sounds = [sound1, sound2, sound3, sound4];
	sounds[1]
	//sound1.attr('type', 'audio/mp3');
//	sound2.attr('type', 'audio/mp3');
	//sound3.attr('type', 'audio/mp3');
	//sound4.attr('type', 'audio.mp3');
	function displayColor (){		
		
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
   //	sounds[colorIndex].play();
   	var thisClass = $(this).attr('class');
   	var thisInex = startcolors.indexOf(thisClass);
   	console.log(thisInex);
   	sounds[thisInex].play();
   	var sequenceColor = colors[sequenceArray[sequenceIndex]][1].attr('class');

	   	if (waitFlag){

	   	}else {
	   		
	   		if ( thisClass == sequenceColor){
	   			sequenceIndex++;

	   			if(sequenceIndex ===  sequenceArray.length  ){
	   				count = 0;
	   				sequenceIndex = 0;
	   				waitFlag = true;
	   				createColors();
	   				setTimeout(function(){
	   					displayColor();
	   				},1000);
	   				
	   				
	   			}
	   		
	   		}else{
	   			alert("Wrong color, Game Over!")
	   		}
	   	}

	}
  		
  		$('.red').on("click", checkMatch);
  		
  		$('.blue').on("click", checkMatch);

  		$('.yellow').on("click", checkMatch);

  		$('.green').on("click", checkMatch);
  	


 
createColors();

displayColor();

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