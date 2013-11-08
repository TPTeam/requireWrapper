var theModule = theModule || {};

(function(func) {
	if (typeof define === 'function') {
	//define module
		define([''], func);
	} else {
	//go ahead with global scope pollution
		theModule = func();
	}
})(function() {
		var theModule = function(name) {
			console.log("ciao da require, "+name+"!");
		}
		return theModule;
	})	
