// JavaScript Document

$(document).ready(function(){

	$('.hang').slideDown();
	var t = setTimeout("$('.hang').slideUp()",6000);
	
	//新增免費mycard class
	$(".clsFreeMyCardMsg").prev().addClass("addclassfmc");

});