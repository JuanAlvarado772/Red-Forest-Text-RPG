const newgame = document.getElementById('newgame');
const startscreen = document.querySelector('.startscreen')
const gameimg = document.querySelector('.gameimg')
const game = document.getElementById('game');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const text = document.getElementById('text');
const health = document.getElementById('health');
let healthValue = 100;
let currentHealth = 100;
let goldValue = 0
// implement OOP 

//set up functions for button2, button3, button4 next story part will have Logan choose three other options.




btn1.addEventListener('click', function() {
  btn1.classList.toggle('hide');
  btn2.style.display = "block";
  btn3.style.display = "block";
  btn4.style.display = "block";
  text.innerHTML = `<p>
As Logan ponders his next move, three paths unfold before him: <br /><br />

Venture into the Ancient Forest, rumored to hold hidden treasures guarded by mystical creatures. The journey promises riches but is fraught with peril.
<br />
<br />
Seek out the Deserted Caves on the western hills, where it's said ancient artifacts lie buried. The caves are less dangerous but require skill and cunning to navigate.
<br />
<br />
Travel to the Neighboring Village to offer his skills for hire. While it may not promise the wealth of dungeons, it's a safer way to earn money for his family's needs.
<br />
<br />
Each choice carries its own risks and rewards, compelling Logan to weigh his options carefully.</p>`;
  gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV84cxCjIJMvFPS3oEfcdoKGcaymmg9T-uj4VZrpZwyNNbvBYvBVDiJg9zqTExYkbptGap__bq25BFxNfkG8BmXjpceGURlBY8ULO_5klOADvlIrKyS0=w2400')"; 
})

function ancientForest () {
  
  btn3.textContent = 'Carry On';
  btn4.style.display = "none";
  btn2.removeEventListener('click', ancientForest);
  btn2.textContent = 'Help Kayla'
  text.innerHTML = `<p>
Upon entering the Ancient Forest, Logan immediately encounters Kayla, a young woman fraught with worry. She explains that her little brother ventured into the forest and has not returned. She pleads for Logan's help. Faced with this unexpected situation, Logan has two choices: <br />

Help Kayla: Logan decides to assist Kayla in finding her brother, venturing deeper into the forest's mysteries together. This choice could lead to unforeseen dangers but also potential allies and rewards. <br />

Carry On: Logan chooses to focus on his original quest, believing that time is of the essence and his family's needs must come first. He continues on his path, leaving Kayla to search on her own. <br /> <br />

Logan's decision at this moment could greatly impact his journey through the Ancient Forest, altering the challenges he faces and the allies he may gain.</p>`;
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV86Fdoyqdosyr8f65w3E_rR9BdlbIzDwQ2iFMpMn6tof11z1uWkfuWRIxXn3164oqSB5XFLzgrKEm6WAZdaLS28woApr8IdaTg89s0vG1CmWFKEIrLU=w2400')";
}

btn2.addEventListener('click', ancientForest);









function penalty () {
  currentHealth = healthValue - Math.floor(Math.random() * 11) + 1;
}

function endGame () {
  if (currentHealth === 0) {
    startscreen.classList.toggle('block')
    game.style.display = "none";
    return;
  }
}

newgame.addEventListener('click', function() {
  startscreen.classList.toggle('hide')
  game.style.display = "block";
});