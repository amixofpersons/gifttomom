
var messages = ["You're a great person, Mom","I love you, Mom", "You're the best Mom anyone could ask for", 
				"I don't believe in God, but I'd say you fit the bill pretty close",
				"You deserve only the best now and always", "It's your special day!",
				"I believe in you, Mom", "I love seeing you smile, Mom", "I'm so glad I know you"];

var counter = 0;

function swapText(){
	if(counter == 0){
		$("#h1").fadeOut(1000, function(){
			document.getElementById("h1").innerHTML = "I heard today's your birthday.";
		});
		$("#h1").fadeIn(1000, function(){});
	}

	if(counter == 1){
		$("#h1").fadeOut(1000, function(){
			document.getElementById("h1").innerHTML = "I thought it'd be fitting if I made you something special.";
		});
		$("#h1").fadeIn(1000, function(){});
	}

	if(counter == 2){
		$("#h1").fadeOut(1000, function(){
			document.getElementById("h1").innerHTML = "So let's playback my messages to you";
		});
		$("#h1").fadeIn(1000, function(){});
	}

	if(counter >= 3){
		var j = Math.floor(Math.random() * messages.length);
		$("#h1").fadeOut(1000, function(){
			document.getElementById("h1").innerHTML = messages[j];
		});
		$("#h1").fadeIn(1000, function(){});		
	}
	counter++;
}