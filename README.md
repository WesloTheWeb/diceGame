# A Mario Party theme Dice Game.
# Developer Note:
- One of the goals when doing this project was to practice vanilla JavaaScript and manipulating the DOM. It is not too complicated but simple enough to incorporate what I have learned and been studying.
- Also a drill I set for myself was to not repeat code and incorporate functions to call on repeated code instead.
- Background: The Mario Party theme is from the Mario Party dice roll game. I could not find any exports of their dice. perhaps in future I would add more to the aesthetics, but this project was focued on the JavaScript primarily.
# This project is also my entry to Twilio's Hatch Apprenticeship 2019. Part of the application is to demo a code. I demo'd via video but felt time constraints and will be adding extra tidbits here, it was hard to include everything in 5 minutes time. The video may be viewed by clicking the link below:

# YouTube link of short walkthrough: https://www.youtube.com/watch?v=IAs28qiybbc
# WHAT I ENJOYED:
- I really enjoyed making the dice (Random Number Generated) RNG with the Math methods and crafty my code using the neat trick with the .textContent. Specifically of pulling of images of the var "dice" to match the actual images. I am referring to the code excerpt below.

# CODE EXCERPT 
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
 

# What I found challenging:
- It took me awhile to really nail switching the players when the user holds. I tried my best to not use jQuery and figure out vanilla JavaScript. I don't mind vanilla, it's just that at work I am working heavily with jQuery. But this did reinforce old lessons and I learnt and reviewed a lot.

# Description:
One of the few old projects I wanted to revisit. Initially I was on the developer path (full stack) but then fell in love with design UX/UI. 
While still appreciating UX/UI I am at a point where I am comfortable on Front End Web Development and want to improve my programming 
language skills. Which is why my Github hasn't been utilized in awhile. 

This is part of a series of "redoing" old projects from boot camp as well as projects that highlights a specific thing (i.e RNG,
DOM Manipulation, Experiments). I want to start using Github more actively. As well as add "upgrades" to older projects with my new
found knowledge.
