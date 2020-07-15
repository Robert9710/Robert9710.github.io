$(document).ready(function(){

$("button").click(function(){
    tet = $("#text").val();
	//$("#mess").append(tet+"\n");
	$("#text").val("");
	$("pre").append(tet+"\n");
  });

});