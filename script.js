$(document).ready(function(){
  // var grid = $("#grid");
  // grid.css("fontSize", "0");
  // grid.css("padding", "20px 20px 80px 20px");
  // grid.css("margin", "0 auto");
  // grid.css("border", "5px solid grey");
  // var rows = 25;
  // var columns = 40;
  // var row = $("<div class='row'></div>");
  // var square = $("<div class='square'></div>");
  // square.css("margin", "0")
  // square.css("height", "15px");
  // square.css("width", "15px");
  // square.css("display", "inline-block");
  // square.css("border", "grey 1px solid");
  // for (var i = 0; i < columns; i++) {
  //   (square.clone()).appendTo(row);
  // }
  // for (var j = 0; j < rows; j++) {
  //   (row.clone()).appendTo(grid);
  // }
  // for (var k = 0; k < grid.find("div").children().length; k++) {
  //   $(grid.find("div").children()).on("click", function(){
  //     $(this).css("backgroundColor", "red");
  //   });
  // }

  var grid = $("#grid");
  grid.appendTo("#container");
  grid.css("fontSize", "0")
  grid.css("padding", "20px 20px 20px 20px");
  grid.css("border", "5px solid grey")
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 35; j++) {
      var square = $("<div class='square'></div>");
      square.css('height', '15px');
      square.css('width', '15px');
      square.css('margin', '0px');
      square.css('padding', '0px');
      square.css('display', 'inline-block');
      square.css('border', '1px grey solid')
      square.appendTo(grid);
    }
  }
  // console.log(grid.children());

  var userColor;
  var colors = ["F72F08", "FC8203", "FCF203", "58C11B", "1B88DA", "791BDA"];
    // var colors = ["F72F08", "FC8203", "FCF203", "E7C309", "C3E709", "09E7D5", "58C11B", "090EE7", "1B88DA", "791BDA", "E7097A", "71480D", "FFFFFF", "000000"];
  // var colors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"];
  for (var l = 0; l < colors.length; l++) {
    var palette = $("<div></div>");
    palette.appendTo("#colors");
    $("#colors").append(palette);
    palette.css("backgroundColor", "grey");
    palette.css("height", "30px");
    palette.css("width", "30px")
    palette.css("borderRadius", "50%");
    palette.css("backgroundColor", "#"+colors[l]);
    // palette.css("backgroundColor",colors[l]);
    palette.on("click", function(){
      userColor = $(this).css("backgroundColor");
    });
    for (var k = 0; k < grid.children().length; k++) {
      $(grid.children()).on("click", function(){
        $(this).css("backgroundColor", userColor);
      });
    }
  }



});
