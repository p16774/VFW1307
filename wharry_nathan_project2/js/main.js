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
	
	// Create Select Element for Race Selection
	function selRace() {
		
		// define needed variables		
		var races = ["--Choose A Race--", "Human", "Elf", "Dwarf", "Half-Orc", "Halfling"],
			formTag = document.getElementsByTagName("form"),
			selectLi = $("select_race"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "char_race");
			
		// Loop through races array and make our options
		for(var i=0, j=races.length; i<j; i++) {
			
			var makeOption = document.createElement("option");
			var optText = races[i];
			
			// Create our Option Tags
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			
			// Attach Option into Select Element
			makeSelect.appendChild(makeOption);
			
		};
		
		selectLi.appendChild(makeSelect);		
			
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
	
	// find selected radio button (gender)
	function genSelect() {
		
		// declare variables
		var radios = document.forms[0].char_gen;
		
		// loop through to get selected radio button
		for (var i=0; i<radios.length; i++) {
			
			// validate what is checked first
			if(radios[i].checked) {
					
					//assign value if checked
					genValue = radios[i].value;
					
			};
			
		};
		
	};
	
	function storeChar() {
		
		// create random number for unique id in local storage
		var id = Math.floor(Math.random()*10000000);
		
		// run needed data functions
		genSelect();
				
		// gather our form fields and save our data
		var item				= {};
			item.char_name		= ["Name", $("char_name").value];
			item.char_race		= ["Race", $("char_race").value];
			item.char_gen		= ["Gender", genValue];
			item.char_class		= ["Class", $("char_class").value];
			item.char_age		= ["Age", $("char_age").value];
			item.char_weigh		= ["Weight", $("char_weigh").value];
			item.char_birth		= ["BirthDay", $("char_birth").value];
			item.char_desc		= ["Description", $("char_desc").value];
			item.version		= ["Version", $("version").value];	
			
			// variablize our stringify
			itemData = JSON.stringify(item);
						
		// save our data into local storage
		localStorage.setItem(id, itemData);
		
		};
		
	addChar.addEventListener("click", storeChar);
	
	
	// Display Data variables and functions
	
	var displayChar = $("dispChar");
	
	var showChar = function () {
		
			//Write function to the browser
			var makeDiv = document.createElement("div"),
				makeList = document.createElement("ul");
				
			// write our data	
			makeDiv.setAttribute("id", "charData");
			makeDiv.appendChild(makeList);
			
			// Loop through localStorage
			for(var i=0, j=localStorage.length; i<j; i++) {
				
				
			};
		
		};
	
	displayChar.addEventListener("click", showChar);
	
	
	// Clear Data variables and functions
	
	var clearChar = $("delChar");
	
	var deleteChar = function() {
		
		};
	
	clearChar.addEventListener("click", deleteChar);
	
	// Execute Needed Functions and declare variables
	var genValue;
	selRace();



}); // End DOM Loaded Function