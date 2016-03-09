/*
 * form-overlay.js
 *
 * Copyright 2015, Leon Da Costa - http://leondacosta.me/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github: https://github.com/LeonDaCosta/form-overlay
 * Version: 0.1
 */

var FormOverlay = function FormOverlay(){

	var settings = {
  		btnId: null,
  		formContainer: null,
  		postUrl: null
	}

	FormOverlay.prototype.count = 4;

	var json = arguments[0];
	var btnId = json.btnId;
	var formDiv = json.formContainer;

	var btn = document.getElementById(btnId);

	window.onload = function() {
		document.body.innerHTML += '<div id="overlay" class="overlay-hide"></div>';
    	document.getElementById(btnId).onclick = function btnClick() {
			 addBackground();
    	}

    	document.getElementById('overlay').onclick = function btnClick() {
			 removeBackground();
    	}

    	function removeBackground() {
    		document.getElementById('overlay').className = "";
    		removeForm();
    	}

    	function addBackground() {
    		document.getElementById('overlay').className = "";
    		document.getElementById('overlay').className += 'overlay';
    		addForm();
    	}

    	function addForm() {
    		var formc = document.getElementById(formDiv);
    		formc.style.display = 'block';
    		document.getElementById(formDiv).className += "overlay-window overlay-form-div";
    	}

    	function removeForm() {
    		var formc = document.getElementById(formDiv);
    		formc.className = "";
    		formc.style.display = 'none';
    	}

    	var formc = document.getElementById(formDiv);
    	formc.style.display = 'none';
	}
}
