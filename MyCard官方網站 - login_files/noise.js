// JavaScript Document
$(document).ready(function(){
    const randomNum = Math.floor(Math.random()*5+1);
    switch(randomNum){
        case 1:
        $(".code_pic").addClass("noise01");
        break;
        case 2:
        $(".code_pic").addClass("noise02");
        break;
        case 3:
        $(".code_pic").addClass("noise03");
        break;
        case 4:
        $(".code_pic").addClass("noise04");
        break;
        case 5:
        $(".code_pic").addClass("noise05");
        break;
    }
});