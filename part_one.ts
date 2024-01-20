//Break up text file into various components:
//	Line 1: Called numbers
//	Lines 3-7: Bingo board
//
//Create board "class" to track state of board with:
//	Create a hash map for O(1) access to location of number on board
//	Create hash map of rows and columns with count of matched numbers - once one of these hits 5, the board wins and can return true
//
//Iterate through called numbers, marking matching numbers on the board.
//
//If no row or column reaches 5 return false.

export default function partOne(): boolean {
    console.log("Hi part one.")
    return true
}

