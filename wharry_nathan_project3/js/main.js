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
	
	// Functions for creation of elements **********

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
		
	
	// Display Weight Slider Value on the screen. **********
	
	var weight = $("char_weigh");
		span = $("number");
	
	
	var displayWeight = function() {
		
		span.innerHTML = weight.value;	
		
		};
	
	weight.addEventListener("change", displayWeight);
	
	
	// Store Data variables and functions **********
	
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
	
	
	// Display Data variables and functions **********
	
	var displayChar = $("dispChar");
	
	var showChar = function () {
		
		// If statement to make sure we have data to display
		
			if (localStorage.length === 0) {
				
				alert("No character data to display!");
				
			} else {
			
				//Write function to the browser
				var makeDiv = document.createElement("div"),
					makeList = document.createElement("ul");
					
				// write our data	
				makeDiv.setAttribute("id", "charData");
				makeDiv.appendChild(makeList);
				
				//replace our form
				replaceForm = $("displayData");
				newLink = $("dispChar");
				
				replaceForm.innerHTML = "";
				replaceForm.appendChild(makeDiv);
				
				newLink.innerHTML = "<a href=\"additem.html\" target=\"_self\" id=\"addChar\">Return to Home</a>";
				
				
							
				// Loop through localStorage
				for(var i=0, j=localStorage.length; i<j; i++) {
					
					// create our List Item element
					var makeLi = document.createElement("li");
						linksLi = document.createElement('li');
						makeList.appendChild(makeLi);
					
					// extract our data
					var key = localStorage.key(i),
						value = localStorage.getItem(key);
						
					// recreate our object from our localStorage data
					var obj = JSON.parse(value);
					
					// write our data
					var makeSubList = document.createElement("ul");
					makeLi.appendChild(makeSubList);
					
					// loop through data for proper itemization
					for(var n in obj) {
						
						var makeSubLi = document.createElement("li");
						makeSubList.appendChild(makeSubLi);
						
						// create our actual text
						var optSubText = obj[n][0] + ": " + obj[n][1];
						makeSubLi.innerHTML = optSubText;
						makeSubList.appendChild(linksLi);
						
					}; // end for in loop
					
					makeItemLinks(localStorage.key[i], linksLi); // function to create our edit/delete links for each item
									
				}; // end for loop through localStorage
				
			}; // end if statement for displaying data
			
		}; // end function for displaying data
		
		// create edit and delete links for our stored data items
		function makeItemLinks(key, linksLi) {
			
			// edit link variables
			var editLink = document.createElement('a');
		 		editLink.href = '#';
				editLink.key = key;
			var editText = "Edit Character";
			
			// listen for event to edit
			//editLink.addEventListener("click", editItem);
			
			// edit link creation
			editLink.innerHTML = editText;
			linksLi.appendChild(editLink);
			
			// create line break to separate our links
			var breakTag = document.createElement('br');
			linksLi.appendChild(breakTag);
			
			// delete link variables
			var delLink = document.createElement('a');
				delLink.href = '#';
				delLink.key = key;
			var delText = "Delete Character";
			
			// listen for event to delete
			//delLink.addEventListener("click", delItem);
			
			// delete link creation
			delLink.innerHTML = delText;
			linksLi.appendChild(delLink);
			
		};
	
	displayChar.addEventListener("click", showChar);
	
	
	// Clear Data variables and functions **********
	
	var clearChar = $("delChar");
	
	var deleteChar = function() {
		
			if (localStorage.length === 0) {
				
				alert("No current data to clear.");
				
			} else {
				
				localStorage.clear();
				alert("All characters removed.");
				window.location.reload();
				return false;
				
			};
		
		};
	
	clearChar.addEventListener("click", deleteChar);
	
	// Execute Needed Functions and declare variables
	var genValue;
	selRace();
	
	
	// Functions for Error Checking and Validation **********
	
	



}); // End DOM Loaded Function