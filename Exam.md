I'm going to start with TDD, from the most general and development-blocking functional requirements to the less ones.

Roughly, should be this order:

FR - A player can start one game.
RULES - Movement Rules 
FR - A player can start a movement.
FR - A player can finish a movement.
RULES - Eat Rules 
RULES - Winning and losing rules
FR - A player can save one game.
FR - A player can load one game.

Notes: I think that I'm going to delegate all the responsability on the board isntead of the pieces, pieces won't know where are they.

Board is represented by [][]: 

[0, 0], [1, 0], [2, 0] ... [7, 0]       Black pieces on top
[0, 1], [1, 1], [2, 1] ... [7, 1]
...                        
...                        
...                    ... 
[0, 7], [1, 7], [2, 7] ... [7, 7]       White pieces on Bottom



Final note: So far so good, now I would like to refactor the code, optimize some algorithms (the ones to determine entity colors and so on) and start developing rules. Moving some entities to domain folder and start creating useCases for the rules.