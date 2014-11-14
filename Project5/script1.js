//Mark Evans Project 5

$("body").load = $(go);

var oh = 0;
var ow = 0;
function go(){
	$("#pete").draggable({start: dragCallBack, stop: endDragCallBack});
	$("#pete").resizable({start: resizeCallBack, stop: endResizeCallBack});
	$("body").mousemove(checkDrag);
}

function checkDrag(){//the pete doesn't always get his draggable back after being dragged, so this helps get it back in case it doesn't work
	if(!$("#pete").data('draggable')){
		$("#pete").draggable({start: dragCallBack, stop: endDragCallBack});
	}
}

function resizeCallBack(){
	$("#pete").text("What is this sorcery? Why is Pete changing sizes?");
	ow = $("#pete").width();
	oh = $("#pete").height();
}

function dragCallBack(){
	$("#pete").text("Please don't do move Paragraph Pete like this, I'm getting motion sickness! I already had a headache from looking at this screen for hours!");
	$("#pete").css("background-color","green");
}

function endResizeCallBack(event, ui){
	//str = $("#pete").html().replace($("#pete").text(), "I'm back");

	var str = "";
	if($("#pete").width() > ow){
		str = "Why did you make your new best friend Pete fat?";
	}else if($("#pete").height() < oh){
		str = "Why did you make your new best friend Pete short?";
	}else if($("#pete").width() < ow){
		str = "Why did you make your new best friend Pete skinny?";
	}else if($("#pete").height() > oh){
		str = "Why did you make your new best friend Pete tall?";
	}else{
		str = "Why did you make your new best friend Pete .....? Wait, you resized me just to let me be the same size?? That hurts.";
	}

	$("#pete").resizable("destroy");
	if($("#pete").data('draggable')){
		$("#pete").draggable("destroy");
	}
	$("#pete").text(str);
	$("#pete").resizable({start: resizeCallBack, stop: endResizeCallBack});
	$("#pete").draggable({start: dragCallBack, stop: endDragCallBack});
}

function endDragCallBack(){
	$("#pete").css("background-color","purple");
	$("#pete").text("Why did you do that? I'm too many pixels away home.");
	$("#pete").draggable("destroy");
	$("#pete").draggable({start: dragCallBack, stop: endDragCallBack});
	$("#pete").resizable("destroy");
	$("#pete").resizable({start: resizeCallBack, stop: endResizeCallBack});
}

/*
	
*/