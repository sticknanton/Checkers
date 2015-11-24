findMoves = function(){
  if (board[row][col].piece=='r')
  {
    if(((row-1)>=0)&&((row-1)<=7)&&((col+1)>=0)&&((col+1)<=7))
    {    var upRight = board[row-1][col+1].piece;
      if(upRight =='')
        {
        board[row-1][col+1].dive.addClass('movable');
        }
      if(((row-2)>=0)&&((row-2)<=7)&&((col+2)>=0)&&((col+2)<=7))
        if(upRight=='b'&&(board[row-2][col+2].piece==''))
        {
          board[row-2][col+2].dive.addClass('movable').addClass('jump');
        }
    }
    if(((row-1)>=0)&&((row-1)<=7)&&((col-1)>=0)&&((col-1)<=7))
      var upLeft = board[row-1][col-1].piece;
       //directionally based variable
      if(upLeft =='')
        {
          board[row-1][col-1].dive.addClass('movable');
        }
    if(((row-2)>=0)&&((row-2)<=7)&&((col-2)>=0)&&((col-2)<=7))
      if(upLeft=='b'&&(board[row-2][col-2].piece==''))
        {
          board[row-2][col-2].dive.addClass('movable').addClass('jump');
        }
  if(board[row][col].king)   //BUT WHAT IF THERE"S A KING?
    {
      if(((row+1)>=0)&&((row+1)<=7)&&((col+1)>=0)&&((col+1)<=7))
        var downRight = board[row+1][col+1].piece;
       //directionally based variable
      if(downRight =='')
        {
          board[row+1][col+1].dive.addClass('movable');
        }
        if(((row+2)>=0)&&((row+2)<=7)&&((col+2)>=0)&&((col+2)<=7))
        if(downRight=='b'&&(board[row+2][col+2].piece==''))
          {
            board[row+2][col+2].dive.addClass('movable').addClass('jump');
          }
      if(((row+1)>=0)&&((row+1)<=7)&&((col-1)>=0)&&((col-1)<=7))
      var downLeft = board[row+1][col-1].piece;
         //directionally based variable
        if(downLeft =='')
          {
            board[row+1][col-1].dive.addClass('movable');
          }
          if(((row+2)>=0)&&((row+2)<=7)&&((col-2)>=0)&&((col-2)<=7))
          if(downLeft=='b'&&(board[row+2][col-2].piece==''))
            {
                board[row+2][col-2].dive.addClass('movable').addClass('jump');
            }
    }//END BUT WHAT IF THERE"S A KING?
  }//end red piece movement

  if (board[row][col].piece=='b')
  {
    if(((row+1)>=0)&&((row+1)<=7)&&((col+1)>=0)&&((col+1)<=7))
      var downRight = board[row+1][col+1].piece;
     //directionally based variable
    if(downRight =='')
      {
        board[row+1][col+1].dive.addClass('movable');

      }
      if(((row+2)>=0)&&((row+2)<=7)&&((col+2)>=0)&&((col+2)<=7))
      if(downRight=='r'&&(board[row+2][col+2].piece==''))
        {
          board[row+2][col+2].dive.addClass('movable').addClass('jump');
        }
    if(((row+1)>=0)&&((row+1)<=7)&&((col-1)>=0)&&((col-1)<=7))
    var downLeft = board[row+1][col-1].piece;
       //directionally based variable
      if(downLeft =='')
        {
          board[row+1][col-1].dive.addClass('movable');

        }
        if(((row+2)>=0)&&((row+2)<=7)&&((col-2)>=0)&&((col-2)<=7))
        if(downLeft=='r'&&(board[row+2][col-2].piece==''))
          {
              board[row+2][col-2].dive.addClass('movable').addClass('jump');
          }
    //BUT what if there's a king?!?!
    if(board[row][col].king)
        {
          if(((row-1)>=0)&&((row-1)<=7)&&((col+1)>=0)&&((col+1)<=7))
            {    var upRight = board[row-1][col+1].piece;
           //directionally based variable
          if(upRight =='')
            {
              board[row-1][col+1].dive.addClass('movable');
            }
            if(((row-2)>=0)&&((row-2)<=7)&&((col+2)>=0)&&((col+2)<=7))
            if(upRight=='r'&&(board[row-2][col+2].piece==''))
            {
              board[row-2][col+2].dive.addClass('movable').addClass('jump');
            }
          }
          if(((row-1)>=0)&&((row-1)<=7)&&((col-1)>=0)&&((col-1)<=7))
            var upLeft = board[row-1][col-1].piece;
             //directionally based variable
            if(upLeft =='')
              {
                board[row-1][col-1].dive.addClass('movable');
              }
            if(((row-2)>=0)&&((row-2)<=7)&&((col-2)>=0)&&((col-2)<=7))
            if(upLeft=='r'&&(board[row-2][col-2].piece==''))
              {
                board[row-2][col-2].dive.addClass('movable').addClass('jump');
              }
        }
  }//end black piece movement


}
