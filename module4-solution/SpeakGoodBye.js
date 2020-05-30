(function(window){
	var speakbye={};
	speakbye.speak=function(name){
		var speakWord = "Good Bye";
		console.log(speakWord + " " + name);
	}
window.speakbye=speakbye;
})(window);