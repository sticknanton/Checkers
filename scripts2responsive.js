console.log("...loaded");


  var board = [];
  var turn = 'b';
  bPieces = 12;
  rPieces = 12;
  currentRow=0;
  currentCol=0;
  for (var i=0;i<8;i++) {
     board[i] = [];
  }
var viewBoard = $('.viewBoard');


setBoard = function(){
  for (var row = 0; row < 8; row++) {
    for (var column = 0; column < 8; column++) {

      var redChecker = $('<img id = "token" src="plainredchecker.png" />');
      var blackChecker = $('<img id = "token" src="plainblackchecker.png" />')

      if(((row%2==0)&&(column%2!==0)||(row%2!==0)&&(column%2==0))&&row!=3&&row!=4){
          if(row<3){
            board[row][column]={piece:'b',king:false,dive:$('<div>')};
            board[row][column].dive.append($(blackChecker));
          }
          else{
            board[row][column]={piece:'r',king:false,dive:$('<div>')};
            board[row][column].dive.append($(redChecker));
           }
      }
      else{
        board[row][column]={piece:'',king:false,dive:$('<div>')}
      }
      if((row%2==0)&&(column%2!==0)||(row%2!==0)&&(column%2==0)){
        board[row][column].dive.css({
          'background-color':'black'
          });
      }
      else {
        board[row][column].dive.css({
          'background-color':'red'
          });
      }
      board[row][column].dive.attr('class','square');
      board[row][column].dive.data('row',row);
      board[row][column].dive.data('col',column);

      viewBoard.append($(board[row][column].dive));
    }
  }
}

setBoard();


$( ".square" ).click(function(e) {
  if( $(e.target).hasClass('movable'))
  {return}                    /// CLEARS MOVEABLES IF YOU SELECT A DIFFERENT PIECE
  $('.movable').removeClass('movable');////// YEAH

    if(turn==board[$(this).data('row')][$(this).data('col')].piece)
      {
      scope = this;
      currentRow= parseInt($(this).data('row'));
      currentCol= parseInt($(this).data('col'));
      findMovable();
      findJump();
      }
});


findMovable = function(){
  if (board[currentRow][currentCol].piece=='r'||board[currentRow][currentCol].king)
  {
    if(((currentRow-1)>=0)&&((currentRow-1)<=7)&&((currentCol+1)>=0)&&((currentCol+1)<=7))
     var upRight = board[currentRow-1][currentCol+1].piece;
        if(upRight =='')
          {
            board[currentRow-1][currentCol+1].dive.addClass('movable');
          }

    if(((currentRow-1)>=0)&&((currentRow-1)<=7)&&((currentCol-1)>=0)&&((currentCol-1)<=7))
      var upLeft = board[currentRow-1][currentCol-1].piece;
        if(upLeft =='')
          {
            board[currentRow-1][currentCol-1].dive.addClass('movable');
          }
  }
    if(board[currentRow][currentCol].piece=='b'||board[currentRow][currentCol].king)   //BUT WHAT IF THERE"S A KING?
      {
        if(((currentRow+1)>=0)&&((currentRow+1)<=7)&&((currentCol+1)>=0)&&((currentCol+1)<=7))
          var downRight = board[currentRow+1][currentCol+1].piece;
            if(downRight =='')
              {
                board[currentRow+1][currentCol+1].dive.addClass('movable');
              }
        if(((currentRow+1)>=0)&&((currentRow+1)<=7)&&((currentCol-1)>=0)&&((currentCol-1)<=7))
          var downLeft = board[currentRow+1][currentCol-1].piece;
            if(downLeft =='')
              {
                board[currentRow+1][currentCol-1].dive.addClass('movable');
              }
    }
}//end find movable

findJump =function(){
 var jumpAgain = false;
  if (turn=='b'||board[currentRow][currentCol].king){
    if(((currentRow+1)>=0)&&((currentRow+1)<=7)&&((currentCol+1)>=0)&&((currentCol+1)<=7))
      var downRight = board[currentRow+1][currentCol+1].piece;
        if(((currentRow+2)>=0)&&((currentRow+2)<=7)&&((currentCol+2)>=0)&&((currentCol+2)<=7))
          if(downRight!=''&&downRight!=board[currentRow][currentCol].piece&&(board[currentRow+2][currentCol+2].piece=='')){
            board[currentRow+2][currentCol+2].dive.addClass('movable').addClass('jump');
            jumpAgain=true;
          }
    if(((currentRow+1)>=0)&&((currentRow+1)<=7)&&((currentCol-1)>=0)&&((currentCol-1)<=7))
      var downLeft = board[currentRow+1][currentCol-1].piece;
        if(((currentRow+2)>=0)&&((currentRow+2)<=7)&&((currentCol-2)>=0)&&((currentCol-2)<=7))
          if(downLeft!=''&&downLeft!=board[currentRow][currentCol].piece&&(board[currentRow+2][currentCol-2].piece==''))
            {
              board[currentRow+2][currentCol-2].dive.addClass('movable').addClass('jump');
              jumpAgain=true;
            }
  }

  if(turn=='r'||board[currentRow][currentCol].king){
    if(((currentRow-1)>=0)&&((currentRow-1)<=7)&&((currentCol+1)>=0)&&((currentCol+1)<=7))
      var upRight = board[currentRow-1][currentCol+1].piece;
        if(((currentRow-2)>=0)&&((currentRow-2)<=7)&&((currentCol+2)>=0)&&((currentCol+2)<=7))
          if(upRight!=''&&upRight!=board[currentRow][currentCol].piece&&(board[currentRow-2][currentCol+2].piece==''))
            {
              board[currentRow-2][currentCol+2].dive.addClass('movable').addClass('jump');
              jumpAgain=true;
            }

          if(((currentRow-1)>=0)&&((currentRow-1)<=7)&&((currentCol-1)>=0)&&((currentCol-1)<=7))
            var upLeft = board[currentRow-1][currentCol-1].piece;
              if(((currentRow-2)>=0)&&((currentRow-2)<=7)&&((currentCol-2)>=0)&&((currentCol-2)<=7))
                if(upLeft!=''&&upLeft!=board[currentRow][currentCol].piece&&(board[currentRow-2][currentCol-2].piece==''))
                {
                  board[currentRow-2][currentCol-2].dive.addClass('movable').addClass('jump');
                  jumpAgain=true;
                }
        }
    return jumpAgain;
  }//end findJump

changeTurn = function(){
  if (turn=='b'){
    turn='r';
    $('#turn-display').text("Red's Turn!")
  }
  else{
  turn='b';
  $('#turn-display').text("Black's Turn!")
  }
}

$('.viewBoard').on('click','.movable',function(e){
    // e.stopPropagation();

    var moveRow= parseInt($(this).data('row'));
    var moveCol= parseInt($(this).data('col'));
    if($(e.target).hasClass('jump')){
      var jumpMove=true;
    }
      var jumpAgain=false;
    var img = board[currentRow][currentCol].dive.find('img');
    $(board[moveRow][moveCol].dive).append(img);
    board[moveRow][moveCol].piece=board[currentRow][currentCol].piece;
    board[currentRow][currentCol].piece='';

    if(jumpMove)
    {
      if(moveRow>currentRow)
        var jumpRow=currentRow+1;
          else
            var jumpRow=currentRow-1;
      if(moveCol>currentCol)
        var jumpCol=currentCol+1;
          else
            var jumpCol=currentCol-1;

      img = board[jumpRow][jumpCol].dive.find('img')
      $(img).remove();
      board[jumpRow][jumpCol].piece='';
      board[jumpRow][jumpCol].king=false;

      if(turn=='b')
        rPieces--;
      else
        bPieces--;

      if(bPieces==0||rPieces==0){
        endGame();
      return
      }

      if(board[currentRow][currentCol].king){
        currentRow=moveRow;
        currentCol=moveCol;
        board[currentRow][currentCol].king=true;
      }
      else{
        currentRow=moveRow;
        currentCol=moveCol;
      }
      $('.movable').removeClass('movable');
      checkKing(moveRow,moveCol);
    jumpAgain = findJump();
    }

  checkKing(moveRow,moveCol);

  if(jumpAgain)
    return;

  if(board[currentRow][currentCol].king){
    board[currentRow][currentCol].king=false;
    board[moveRow][moveCol].king=true;
    }


  $('.movable').removeClass('movable');
  $('.jump').removeClass('jump');
  changeTurn();
});//ends movable click function

$(".again").click(function(){
  location.reload();
});


endGame = function(){
  if (turn=='b'){
    $('#turn-display').text("Black Wins!")
  }
  else{
  $('#turn-display').text("Red wins!")
  $('.viewBoard').append($('<h1>').text("Congratulations!"));
  }

  $( ".viewBoard" ).fadeOut( "10000", function(){});
    $(".again").append($('<button id="again">').text('Play again?'));
}

checkKing= function(moveRow,moveCol)
{
  if(moveRow==0||moveRow==7) /////Handle the kings and their respective pictures
    {board[moveRow][moveCol].king=true;
      if(board[moveRow][moveCol].piece=='r')
        {
          var rimg = board[moveRow][moveCol].dive.find('img')
          $(rimg).remove();
          rimg = $('<img id = "token" src="kingredchecker.png" />')
        board[moveRow][moveCol].dive.append($(rimg));
        }
      else if(board[moveRow][moveCol].piece=='b')
        {
          img = board[moveRow][moveCol].dive.find('img')
          $(img).remove();
          img = $('<img id = "token" src="kingblackchecker.png" />')
          board[moveRow][moveCol].dive.append($(img));
        }
    }
}
