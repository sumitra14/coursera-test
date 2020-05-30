(function(window){
	var speakhello={};
	speakhello.speak=function(name){
		var speakWord = "Hello";
		console.log(speakWord + " " + name);
	}
window.speakhello=speakhello;
})(window);