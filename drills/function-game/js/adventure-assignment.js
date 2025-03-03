/*
    ASSIGNMENT PROMPT ***************************************************

    Below are several empty function bodies; any code put inside of them
    will run when their corresponding buttons/keys are clicked or pressed.

    You have access to the following functions (aka actions) to execute:
        moveLeft, moveRight, moveUp, moveDown,
        jumpLeft, jumpRight, jumpUp, jumpDown,
        attack, jump, nudge

    (NOTE: One action from that list is unnecessary; it's up to you to 
    figure out which ones you need, but the names should be a big hint!)

    To execute a function, type its name (case matters!!!), followed by 
    parentheses and a semicolon, like this: 

        moveRight();

    Try executing different functions in the empty function bodies below; 
    if you execute the correct functions in the correct button reaction, 
    the game should become playable, and your player character can move 
    around, jump and attack!

    Your goal is to get every button to have the correct action occur
    when you click on them.


    CHALLENGE ************************************************************

    For certain movement related functions, if you put a number in between
    the parentheses, you can change the number of spaces the character moves! 
    
    However, the character can't move through (or land on) a boulder or hole; 
    they'll need to attack a boulder to destroy it and be able to move 
    through it, and the only way to get past holes is to jump over them.
*/

function reactToMoveRightButton() {
    // Here's a freebie answer, as an example.
    // The code below will cause the 'moveRight' function to run when you 
    // push the MOVE RIGHT button, causing the character to move to the right
    // (assuming no boulder is in the way)

    moveRight();
}

function reactToMoveLeftButton() {
    moveLeft();
}

function reactToMoveDownButton() {
    moveDown();
}

function reactToMoveUpButton() {
    moveUp();
}

function reactToAttackButton() {
    attack();
}

function reactToJumpRightButton() {
    jumpRight();
}

function reactToJumpLeftButton() {
    jumpLeft();
}

function reactToJumpDownButton() {
    jumpDown();
}

function reactToJumpUpButton() {
    jumpUp();
}

function reactToJumpButton() {
    jump();
}