// JavaScript Document

/*

*********************
Author: Nathan Wharry
Title: Project 2 - D&D Character Sheet - Javascript
Term: VFW 1307
*********************

*/

// Wait for DOM to fully load
window.addEventListener("DOMContentLoaded", function() {

	// getElementById Function
	function $(x) {
		
		var myElement = document.getElementById(x);
		return myElement;
		
	};
	
	// Display Weight Slider Value on the screen.
	
	var weight = $("char_weigh");
		span = $("number");
	
	
	var displayWeight = function() {
		
		span.innerHTML = weight.value;	
		
		};
	
	weight.addEventListener("change", displayWeight);
	
	
	// Store Data variables and functions
	
	var addChar = $("char_submit");
	
	var storeChar = function() {
		
		alert("Storing data");
		
		var id = Math.floor(Math.random()*10000000);
		
		
		};
		
	addChar.addEventListener("click", storeChar);
	
	
	// Display Data variables and functions
	
	var displayChar = $("dispChar");
	
	showChar = function () {
		
		
	};
	
	displayChar.addEventListener("click", showChar);
	
	
	// Clear Data variables and functions
	
	var clearChar = $("delChar");
	
	deleteChar = function() {
		
	};
	
	clearChar.addEventListener("click", deleteChar);



}); // End DOM Loaded Function