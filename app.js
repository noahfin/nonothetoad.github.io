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
var computerChoice = [];
var playerChoice = [];
var stillPlaying = true;
var waitFlag = true;
var sequenceIndex =0;
var sequenceCount =0

	function displayColor (){		
		
		var colorIndex = sequenceArray[count]
	    computerChoice.push(colorIndex)
		console.log(colorIndex);
		var colorObject = colors[colorIndex][0];
		var colorDiv = colors[colorIndex][1];
		
		//console.log(colors[colorIndex]);
		var style = {
            backgroundColor : colorObject               
    		};    		
		//console.log(computerChoice);
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
   	var thisClass = $(this).attr('class');
   	var sequenceColor = colors[sequenceArray[sequenceIndex]][1].attr('class');

   	if (waitFlag){

   	}else {
   			console.log(thisClass);
   			console.log(sequenceColor);
   		if ( thisClass == sequenceColor){
   			sequenceIndex++;

   			if(sequenceIndex ===  sequenceArray.length  ){
   				count = 0;
   				sequenceIndex = 0;
   				waitFlag = true;
   				createColors();
   				displayColor();
   			}
   		
   		}else{
   			alert("Wrong color, Game Over!")
   		}
   	}


   	 	//if()
   	 	//console.log('click handerlers are set')
		//sequenceArray.push(colorDiv);
	}
  		
  		$('.red').on("click", checkMatch);
  		
  		$('.blue').on("click", checkMatch);

  		$('.yellow').on("click", checkMatch);

  		$('.green').on("click", checkMatch);
  	


  	

  	function checkGame (){    	   		   		
	   		   		
	   	}
  	function sleep(milliSeconds){
    var startTime = new Date().getTime();                    // get the current time
    while (new Date().getTime() < startTime + milliSeconds); // hog cpu until time's up
}

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