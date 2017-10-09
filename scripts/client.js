$(document).ready(main);

function main(){
  $('#genBut').on('click', generate);
  $('.container').on('click', '#changeColor', toggleColor);
}

var backColor = 0;
var butClicked = 0;

function generate(){
  butClicked++;
    $('.container').append('<div class="colorLine"><p>' + butClicked +
    '</p><button id="changeColor">Swap</button><button id="deleteLine">Delete</button></div>');
    backColor = $('.colorLine').css('background-color');
    console.log(backColor);
    return backColor;
}



function toggleColor(){
  if (backColor === 'rgb(255, 0, 0)'){
    $(this).closest('.colorLine').css('background-color', 'yellow');
    backColor = $('.colorLine').css('background-color');
  } else {
    $(this).closest('.colorLine').css('background-color', 'red');
    backColor = $('.colorLine').css('background-color');
  } return backColor;
}
