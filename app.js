$(document).ready(function(){
	console.log("It works ")


//device lighting up one or more buttons in a random order
var red = "rgba(255,0,0, .3)"
var blue = "rgba(0,0,128, .3)"
var yellow = "rgba(255,255,0, .3)"
var green = "rgba(0, 255, 0, .3)"
var colors = [[red,'.red'], [blue,'.blue'], [yellow,'.yellow'], [green, '.green']];
var count = 0;
var startcolors = ['red', 'blue', 'yellow',  'green'];


var colorIndex = Math.floor(Math.random() * 4)
	var style = {
            backgroundColor : colors[3][0]               
    	};

	/*$('.blue').css("backgroundColor", "blue");
	$('.yellow').css("backgroundColor", "yellow");
	$('.green').css("backgroundColor", "green");
	$('.red').css("backgroundColor", "red");
	console.log()
    $('.green').css(style);
	*/
	function setColor(){
		count++;
		var colorIndex = Math.floor(Math.random() * 4);
		console.log(colorIndex)
		var colorObject = colors[colorIndex][0];
		var colorDiv = colors[colorIndex][1];
		console.log(colors[colorIndex]);
		var style = {
            backgroundColor : colorObject               
    		};    		
		
		$(colorDiv).css(style);
		if(count === 3){
			return;
		}
		setTimeout(setColor, 2000);
		setTimeout(function(){
			$(colorDiv).css({ backgroundColor : startcolors[colorIndex]})
		},1500)
		

	} 


	
	setColor();
	
	

	





// player must reproduce that order by pressing the buttons

//game progresses, the number of buttons to be pressed increases.

});