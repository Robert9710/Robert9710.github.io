$(document).ready(function(){


$("button").click(function(){
	
    tet = $("#text").val();
	//$("#mess").append(tet+"\n");
	$("#text").val("");
	$("pre").append(tet+"\n");
	$("#im").attr("src", "");
	console.log("H");
	var fs = require("fs");
	console.log("i");
    var text = fs.readFileSync("file.txt");
	console.log("e");
    print(text)
}) 

var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: "Cards/HunterDragon.png"
}
var c2 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c3 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c4 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
/*
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
var c1 = {
	name: "",
	level: "",
	attribute: "",
	mtype: "",
	ctype: "",
	img: ""
}
*/
});