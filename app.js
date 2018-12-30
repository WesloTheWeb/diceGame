// DEFAULT SETTINGS
// - Define the variables
// - Define the functions (set of scripts) to call back
var scores, roundscore, activePlayer;

function defaultSettings() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    

    // Everything below "resets" the game board.
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // console
    document.querySelector('.new-roll').style.display = 'block';
    document.querySelector('.save-score').style.display = 'block';
}

defaultSettings();


/************************
Event Listener and Clicks 
**************************/

/* ***************************                  ********************************
                                 New Game
******************************                 *************************** */
document.querySelector('.new-game').addEventListener('click', defaultSettings);
function switchPlayer() {
    // Ternary Expression - This is the logic behind switching players
    /* The below expressions also states:
        if (activePlayer === 0) {
            activePlayer = 1; }
            else { 
                activePlayer = 0; 
            }
    */
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    // To update the numbers from keeping its previous score when the new player is up.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // To toggle between removing & adding a class we use .toggle which will add if its there or remove if its not
    // We are affecting the class due to .classList from querySelector
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

/* ***************************                  ********************************
                                   NEW ROLL
******************************                 *************************** */
document.querySelector('.new-roll').addEventListener('click', function() {
    //Step 1 - Define the dice RNG
    var dice = Math.floor(Math.random() * 6) + 1; 

    //Step 2 - Displaying the dice
    var diceDisplay =  document.querySelector('.dice');
    diceDisplay.style.display = 'block';
    diceDisplay.src = 'assets/img/' + 'dice-' + dice + '.png'

    //Step 3 - Logic behind the dice number value and switching players
    if (dice !== 1) {
        // This is saying if dice value IS NOT equal to 1 then do this:
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } 
    else {
        switchPlayer();
    }
});

/* ***************************                  ********************************
                                 HOLD BUTTON
******************************                 *************************** */
document.querySelector('.save-score').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    // Check if player won the game. Use same function to denote change in player's turn.
     if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).innerHTML = '<span id="victory">' + 'Victory!!!' + '</div>';
        document.querySelector('.dice').style.display = 'none';  
        document.querySelector('.new-roll').style.display = 'none';
        document.querySelector('.save-score').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        }
        else {

        //Switch player
        switchPlayer();
    }
});
