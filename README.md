# Evaluation Concepts.

Hexagonal architecture.

Clean architecture.

Clean code.

Object calisthenics:

- Only One Level Of Indentation Per Method.
- Don’t Use The ELSE Keyword.
- Wrap All Primitives And Strings.
- First Class Collections.
- One Dot Per Line.
- Don’t Abbreviate.
- Keep All Entities Small.
- No Classes With More Than Two Instance Variables.
- No Getters/Setters/Properties.

# Assessment: 

Checkers game.

# Description: 

This is a complex assessment, but you don't have to finish it completely but follow the right process and design rules. If you have any doubt, please ask.
Take 10 minutes to explain in a Exam.md file what you will do. 
Use 1:40 hours to implement as many features as you can of the following using TDD. Focus in delivering working code and features.
Use the last 10 minutes to explain what is missing and how you will accomplish it in the same file.
Feel free to comment any decission you take during the development stage.

# Global requirements:

- Organize the project according to clean architecture and hexagonal architecture layers.
- Follow the development stages.
- Install as fewer libraries as possible.
- Use HTML components only (UI improvements are not needed).
- Use TDD.

# Functional Requirements:

- A player can start one game.
- A player can save one game.
- A player can load one game.
- A player can start a movement.
- A player can finish a movement.

# Rules:

- Checkers is a two-player game.
- The board has 8x8 cells. 
- The cell in the lower right side is white.
- Each player has 12 pieces (one player with the white ones, and the other black ones).
- All the pieces are set in the 3 closer rows to the player, in the black cells.
- White pieces starts.
- Each player makes one move in his/her turn.
- Pieces only move in diagonal (left or right) one cell but only forward, when not eating and only if the cell is empty. 
- When eating a piece, you can move also in diagonal forward and backwards, eating several pieces in one movement.
- To eat, there must be an empty cell in the same diagonal of the movement, behind the opponent piece.
- Eating a piece is mandatory.
- If a piece is not eaten, the player loses the piece that had to be used to eat that one automatically (but only one).
- If a piece reaches the last row, it becomes a queen.
- A queen can move in diagonal, forward and backward as many cells as wanted, meanwhile they are empty or there is an empty cell in the same diagonal, behind an opponent piece.
- If a player runs out of pieces, he loses.
- If player pieces are blocked, he loses.
- If a player pieces allowed movements make these pieces to be eaten, he loses.
- If both players are blocked, the one with more pieces on the board, wins.


