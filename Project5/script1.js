//Mark Evans Project 5

$("body").load = $(go);

var height = 0;
var width = 0;
var name = "mvevans";
var position;
function go(){
	$("#pete").draggable({stop: endDragCallBack});
	$("#pete").resizable({stop: endResizeCallBack});
	height = $("#pete").height();
	width = $("#pete").width();
	position = $("#pete").position();
}

function endResizeCallBack(event, ui){
	height = $("#pete").height();
	width = $("#pete").width();
	var json = $.parseJSON('{"name":"'+name+'","width":'+width+',"height":'+height+'}');
	//alert(json.name + ", " + name + ", "  + json.width + ", "  + width + ", "  + json.height + ", "  + height);
}

function endDragCallBack(){
	position = $("#pete").position();
	var json = $.parseJSON('{"name":"'+name+'","x":'+position.left+',"y":'+position.top+'}');
	//alert(json.name + ", " + name + ", "  + json.x + ", "  + position.left + ", "  + json.y + ", "  + position.top);
}
