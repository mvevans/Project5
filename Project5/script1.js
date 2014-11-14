//Mark Evans Project 5

$("body").load = $(go);

var oh = 0;
var ow = 0;
function go(){
	$("#pete").draggable();
	$("#pete").resizable({start: resizeCallBack, stop: endResizeCallBack});
}

function resizeCallBack(){
	$("#pete").text("What is this sorcery? Why is Pete changing sizes?");
	ow = $("#pete").width();
	oh = $("#pete").height();
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
	$("#pete").text(str);
	$("#pete").resizable({start: resizeCallBack, stop: endResizeCallBack});
}

/*
	
*/