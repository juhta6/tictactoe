var menu = new tabris.Page({
topLevel: true,
background: "rgb(132,241,76)"
}).open();
//---------------------------------------------------------------------------------------------------------------------------

var time;

var P1 = new tabris.TextInput({
  layoutData: {left: 20, right: 20, top: "42.5%", bottom: "50%"},
  message: "P1"
}).on("change:text",function(widget, text){
  player1 = text
}).appendTo(menu);

var P2 = new tabris.TextInput({
  layoutData: {left: 20, right: 20, top: "50%", bottom: "42.5%"},
  message: "P2"
}).on("change:text",function(widget, text){
  player2 = text
}).appendTo(menu);

new tabris.Button({
  layoutData: {bottom: 5, left: 5, right: 5, height: 50},
  text: "Go"
}).on("select", function(widget){
 if (P1.get("text") == "" || P2.get("text") == ""){
  widget.set("text", "Set your names!")
  menu.set("background", "red")
   time = setTimeout(warning, 2000)
 } else {
   KEY1 = player1
   KEY2 = player2
  players.set("text", player = player1);
  page.open()
 }
}).appendTo(menu);

 function warning(widget){
     menu.set("background", "rgb(132,241,76)")
     time = "";
   }

//---------------------------------------------------------------------------------------------------------------------------

tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true,
background: "rgb(132,241,76)"
});

//---------------------------------------------------------------------------------------------------------------------------

var color = "rgb(150,255,150)"
var player = player1;
var num = 0;
var scoreX = 0;
var scoreO = 0;
var draws = 0;
var font = "0px";
var fant = "120px";
var alig = "center";

var player1;
var player2;

var KEY1 = player1;
var KEY2 = player2;
var KEY3 = "draws";


function change(widget){
   if (player == player1){
   players.set("text",player = player2)
 } else if (player == player2){
   players.set("text",player = player1)
 }
}

var players = new tabris.TextView({
  layoutData: {right: 5, top: 5},
  font: "16px"
}).appendTo(page);

var btn7 = new tabris.Button({
  id: "leftbottom",
  layoutData: {left: 5, bottom: 5, top: "66%", right: "66%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn1 = new tabris.Button({
  id: "lefttop",
  layoutData: {left: 5, top: 30, bottom: "66%", right: "66%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn9 = new tabris.Button({
  id: "rightbottom",
  layoutData: {right: 5, bottom: 5, top: "66%", left: "66%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn3 = new tabris.Button({
  id: "righttop",
  layoutData: {right: 5, top: 30, bottom: "66%", left: "66%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn4 = new tabris.Button({
  id: "leftcenter",
  layoutData: {left: 5, right: "66%", bottom: "33%", top: "33%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn6 = new tabris.Button({
  id: "rightcenter",
  layoutData: {right: 5, left: "66%", bottom: "33%", top: "33%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn8 = new tabris.Button({
  id: "bottomcenter",
  layoutData: {bottom: 5, top: "66%", left: "33%", right: "33%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn2 = new tabris.Button({
  id: "topcenter",
  layoutData: {top: 30, bottom: "66%", left: "33%", right: "33%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);
var btn5 = new tabris.Button({
  id: "center",
  layoutData: {top: "33%", bottom: "33%", left: "33%", right: "33%"},
  background: color,
  font: fant,
  alignment: alig,
  cornerRadius: 5
}).on("select", function(widget){
  tictactoe(widget)
}).appendTo(page);


var lines = [""];

 var texti = new tabris.TextView({
  layoutData: {top: 5, centerX: 0},
  font: "0px",
  alignment: "center"
}).appendTo(page);
 var text = new tabris.TextView({
  layoutData: {top: 5, left: 5},
  font: "16px",
  alignment: "center"
}).appendTo(page);

function tictactoe(widget){
  if (widget.get("text") == ""){
   widget.set("enabled", false)
   if (player == player1){
   widget.set("text", "x");
   page.set({background: "rgb(132,76,241)"});
   text.set("text",(++num));
 } else if (player == player2){
   widget.set("text", "o");
   page.set({background: "rgb(132,241,76)"});
   text.set("text",(++num));
  }
 }
  change(widget)
  
texti.set("text", lines = [btn1.get("text")+btn2.get("text")+btn3.get("text"),btn4.get("text")+btn5.get("text")+btn6.get("text"),btn7.get("text")+btn8.get("text")+btn9.get("text"),btn1.get("text")+btn4.get("text")+btn7.get("text"),btn2.get("text")+btn5.get("text")+btn8.get("text"),btn3.get("text")+btn6.get("text")+btn9.get("text"),btn1.get("text")+btn5.get("text")+btn9.get("text"),btn3.get("text")+btn5.get("text")+btn7.get("text")]);
  
  for(var line of lines){
      if (line == "xxx"){
      wins(widget)
  	markupEnabled: true
    setTimeout(pageopen, 1250);
        change(widget)
    texti.set({text: "Player "+player+ " wins!", font: font = "18px"});
    scoreX = parseInt(localStorage.getItem(KEY1) || scoreX) + 1;
        text.set("text",(num = 0))
      } else if (line == "ooo"){
        wins(widget)
  	markupEnabled: true
    setTimeout(pageopen, 1250);
        change(widget)
    texti.set({text: "Player "+player+ " wins!", font: font = "18px"});
    scoreO = parseInt(localStorage.getItem(KEY2) || scoreO) + 1;
        text.set("text",(num = 0))
      } else if (num == 9){
    markupEnabled: true
    setTimeout(pageopen, 1250);
    texti.set({text: "Draw!", font: font = "18px"});
    draws = parseInt(localStorage.getItem(KEY3) || draws) + 1;
      }
}
}

function wins(widget){
  btn1.set({enabled: false});
  btn2.set({enabled: false});
  btn3.set({enabled: false});
  btn4.set({enabled: false});
  btn5.set({enabled: false});
  btn6.set({enabled: false});
  btn7.set({enabled: false});
  btn8.set({enabled: false});
  btn9.set({enabled: false});
  scoress.set({text: player1+": " +(scoreX)+"\nDraws: " +(draws)+"\n"+player2+": "+(scoreO)})
    scoreX = scoreX
	scoreO = scoreO
    draws = draws
    localStorage.setItem(KEY1, scoreX.toString());
    localStorage.setItem(KEY2, scoreO.toString());
    localStorage.setItem(KEY3, draws.toString());
  text.set("text",(num = 0))
   }
//---------------------------------------------------------------------------------------------------------------------------
var scores = new tabris.Page({
topLevel: true,
background: "rgb(132,241,76)"
});

function pageopen(widget){
  wins(widget)
  scores.open();
}

var chart = new tabris.Composite({
  layoutData:{top: 20, left: 20, right: 20, bottom: 20},
  background: color,
  cornerRadius: 5
}).appendTo(scores);

new tabris.TextView({
  layoutData: {top: 30, centerX: 0},
  text: "SCORES",
  font: "bold 50px serif"
}).appendTo(chart);

var scoress = new tabris.TextView({
  layoutData: {centerY: 0, centerX: 0},
  text: player1+": " +(scoreX = scoreX)+"\nDraws: " +(draws = draws)+"\n"+player2+": "+(scoreO = scoreO),
  alignment: "center",
  font: "bold 40px"
}).appendTo(chart);

new tabris.Button({
  layoutData: {bottom: 3, left: 3},
  text: "Rematch"
}).on("select",function(widget){
  btn1.set({text: "", enabled: true});
  btn2.set({text: "", enabled: true});
  btn3.set({text: "", enabled: true});
  btn4.set({text: "", enabled: true});
  btn5.set({text: "", enabled: true});
  btn6.set({text: "", enabled: true});
  btn7.set({text: "", enabled: true});
  btn8.set({text: "", enabled: true});
  btn9.set({text: "", enabled: true});
  texti.set({font: font = "0px"});
  lines = [""];
  num = 0
  page.open()
}).appendTo(chart);

new tabris.Button({
  layoutData: {bottom: 3, centerX: 0},
  text: "New game"
}).on("select",function(widget){
  P1.set("text", "")
  P2.set("text", "")
  btn1.set({text: "", enabled: true});
  btn2.set({text: "", enabled: true});
  btn3.set({text: "", enabled: true});
  btn4.set({text: "", enabled: true});
  btn5.set({text: "", enabled: true});
  btn6.set({text: "", enabled: true});
  btn7.set({text: "", enabled: true});
  btn8.set({text: "", enabled: true});
  btn9.set({text: "", enabled: true});
  scoreX = parseInt(localStorage.getItem(KEY1) || scoreX) * 0;
  scoreO = parseInt(localStorage.getItem(KEY2) || scoreO) * 0;
  draws = parseInt(localStorage.getItem(KEY3) || draws) * 0;
  localStorage.setItem(KEY1, scoreX.toString());
  localStorage.setItem(KEY2, scoreO.toString());
  localStorage.setItem(KEY3, draws.toString());
  texti.set({font: font = "0px"});
  lines = [""];
  num = 0
  menu.open()
}).appendTo(chart);

new tabris.Button({
  layoutData: {bottom: 3, right: 3},
  text: "Reset the scores"
}).on("select",function(widget){
  btn1.set({text: "", enabled: true});
  btn2.set({text: "", enabled: true});
  btn3.set({text: "", enabled: true});
  btn4.set({text: "", enabled: true});
  btn5.set({text: "", enabled: true});
  btn6.set({text: "", enabled: true});
  btn7.set({text: "", enabled: true});
  btn8.set({text: "", enabled: true});
  btn9.set({text: "", enabled: true});
  scoreX = parseInt(localStorage.getItem(KEY1) || scoreX) * 0;
  scoreO = parseInt(localStorage.getItem(KEY2) || scoreO) * 0;
  draws = parseInt(localStorage.getItem(KEY3) || draws) * 0;
  localStorage.setItem(KEY1, scoreX.toString());
  localStorage.setItem(KEY2, scoreO.toString());
  localStorage.setItem(KEY3, draws.toString());
  scoress.set({text: player1+": " +(scoreX = scoreX)+"\nDraws: " +(draws = draws)+"\n"+player2+": "+(scoreO = scoreO)})
  texti.set({text: "", font: font = "0px"});
}).appendTo(chart);
      
