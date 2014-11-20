//Mark Evans Project 5

$("body").load = $(go);

var height = 0;
var width = 0;
var name = "mvevans";
var offset;
function go(){
	$("#pete").draggable({stop: endDragCallBack});
	$("#pete").resizable({stop: endResizeCallBack});
	
	var json =$.parseJSON( $.ajax( "../Project5/Project5/getDataJSON.php?", { type: "GET", data: "name="+name, async: false}).responseText );
	
	$("#pete").width(json.width);
	$("#pete").height(json.height);
	$("#pete").css({top:json.y, left:json.x});
	
	height = $("#pete").height();
	width = $("#pete").width();
	offset = $("#pete").offset();
	
	//alert("json.x = " + json.x + " : offset.left = "  + offset.left + "\njson.y = "  + json.y + " : offset.top =  "  + offset.top + "\njson.width = "  + json.width + " : width = "  + width + "\njson.height = " + json.height + " : height = "  + height);
}

function endResizeCallBack(event, ui){
	height = $("#pete").height();
	width = $("#pete").width();
	$.ajax( "../Project5/Project5/writeDimensions.php", { type: "GET", data: "name="+name+"&width="+width+"&height="+height, success: check } );
}

function endDragCallBack(){
	offset = $("#pete").offset();
	$.ajax( "../Project5/Project5/writePosition.php", { type: "GET", data: "name="+name+"&x="+offset.left+"&y="+offset.top, success: check } );
}

function check(){
	var json =$.parseJSON( $.ajax( "../Project5/Project5/getDataJSON.php?", { type: "GET", data: "name="+name, async: false}).responseText );
    //alert("json.x = " + json.x + " : offset.left = "  + offset.left + "\njson.y = "  + json.y + " : offset.top =  "  + offset.top + "\njson.width = "  + json.width + " : width = "  + width + "\njson.height = " + json.height + " : height = "  + height);
}