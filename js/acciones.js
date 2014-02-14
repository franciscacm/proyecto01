// JavaScript Document
$(document).ready(function(){
  document.addEventListener("deviceready",function(){
	  $('#B1').tap (function() {
	   navigator.notification.beep(1);
	  $('#V1').tap (function() {
		  navigator.notification.vibrate(500); 
	  });// tap de V1
	  }); // tap de B1
  });// device ready
}); //ready
