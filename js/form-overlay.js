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
  		tnId: null,
  		formContainer: null,
  		postUrl: null
	}
	
	FormOverlay.prototype.count = 4;
	
	console.log(arguments.length);
	console.log(arguments[0]);
	var json = arguments[0];
	console.log(json.btnId);
	
	var btnId = json.btnId;
	var btn = document.getElementById(btnId);
	
	console.log(btnId);
	
	window.onload = function() {
    	document.getElementById(btnId).onclick = function btnClick() {
        	//alert("Simple JS From Overlay");
        	//var div = document.createElement("div");
			//div.innerHTML = "some HTML";
			 //document.body.innerHTML = '<div class="overlay"></div>';
			 //document.body.appendChild('<div class="overlay"></div>');
			 document.body.innerHTML += '<div class="overlay"></div>';
    	}
	}
}