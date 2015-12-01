# Checkers

Checkers is the name of the game. As a user I am able to pilot either the black or red pieces and
alternate with the person sitting next to me or simply guide both sides throughout the course of the game.

http://sticknanton.github.io/Checkers/



Technologies used: 
Very basic HTML just to setup the initial frame to build from.
Also fairly minimal styling done on the separate style sheet due to actually building and styling most of the game simultanesously
Extensive js using jQuery and general logic.

The main functions that drive the game are setBoard(); findMove() and findJump();
setBoard() creates 64 clickable divs to allow the user to interact by clicking on them, it also apends the images of the pieces and alternate the colors of squares.
findMove() looks for the potential moves depending on .piece value and whether or not that piece is a king
findJump() provides a similar opportunity and assigns jump to be true




Images to come....


