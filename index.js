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
  btn3.removeEventListener('click', village);
  btn2.removeEventListener('click', ancientForest);
  btn4.removeEventListener('click', desertedCaves);
  btn2.addEventListener('click', helpKayla);
  btn3.addEventListener('click', carryOn);
  btn2.textContent = 'Help Kayla'
  text.innerHTML = `<p>
Upon entering the Ancient Forest, Logan immediately encounters Kayla, a young woman fraught with worry. She explains that her little brother ventured into the forest and has not returned. She pleads for Logan's help. Faced with this unexpected situation, Logan has two choices: <br />

Help Kayla: Logan decides to assist Kayla in finding her brother, venturing deeper into the forest's mysteries together. This choice could lead to unforeseen dangers but also potential allies and rewards. <br />

Carry On: Logan chooses to focus on his original quest, believing that time is of the essence and his family's needs must come first. He continues on his path, leaving Kayla to search on her own. <br /> <br />

Logan's decision at this moment could greatly impact his journey through the Ancient Forest, altering the challenges he faces and the allies he may gain.</p>`;
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV86Fdoyqdosyr8f65w3E_rR9BdlbIzDwQ2iFMpMn6tof11z1uWkfuWRIxXn3164oqSB5XFLzgrKEm6WAZdaLS28woApr8IdaTg89s0vG1CmWFKEIrLU=w2400')";
}

function helpKayla () {
btn2.removeEventListener('click', helpKayla);
btn3.removeEventListener('click', carryOn);
btn2.textContent = "Touch the Glowing Rune";
btn3.textContent = "Examine the Rune Closely";
text.innerHTML = `In the heart of the Ancient Forest, Logan stands before a mysterious, sealed gateway. Its surface is covered in enigmatic runes, with one in the center glowing more brightly than the rest. As he contemplates his next move to find Kayla's brother, Logan faces a crucial decision with two distinct options:<br /><br />

Touch the Glowing Rune: Feeling a powerful draw towards the glowing rune, Logan considers reaching out to touch it. This direct action could activate the gateway, possibly opening a path or revealing secrets needed to proceed. However, touching the rune might also trigger protective spells or transport him to an unknown location, presenting an immediate and unpredictable risk. <br /><br />

Examine the Rune Closely: Alternatively, Logan thinks about examining the rune closely without making physical contact. By studying its design and the magic it emits, he might uncover a safer way to activate the gateway or even decode a message left by Kayla's brother. This method is time-consuming and requires Logan to tap into his knowledge of arcane symbols, offering a cautious approach that minimizes immediate danger but delays action. <br /><br />

Logan's choice at this moment is critical; it will not only affect his ability to advance through the forest but also determine how he navigates the challenges that lie beyond the gateway. Whether he chooses the boldness of direct contact or the prudence of careful study, his decision will shape the path of his quest to find Kayla's brother.</p>`;

gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV872rwfZ2xPisiglPJ9oqPqgUh0Q4_UM4aqYKAoEdks61SSWizqbS0vMiEu-15LleBnk8wrsOSiBVwfCAKubrRmQO5jAE1KDigV7DCicUaV1D_2sI2Y=w2400')";
}
//helpKayla



function carryOn () {
  btn3.removeEventListener('click', carryOn);
  btn2.removeEventListener('click', helpKayla);
  btn2.textContent = 'Venture Deeper into the Darkness';
  btn3.style.display = 'none';
  text.innerHTML = `<p>
In the dense, shadowed expanse of the Ancient Forest, Logan's decision to forgo aiding Kayla in her quest to find her brother leads him down a path markedly different from the tales of enchanted gateways and glowing runes. As he ventures deeper, the expectation of confronting a mysterious, rune-adorned gateway dissipates into the forest mist. Instead, Logan finds himself at the edge of an eerily silent clearing, where the air hangs heavy with the scent of old magic and untold stories.

The ground in front of him bears a large, unexplained depression, a stark reminder of where the fabled gateway should have stood. Yet, in this reality, shaped by his choices, there is no gateway, no glowing runes—only the impression of something ancient that once was but is now absent. The forest around this clearing seems darker, the trees closer, as if nature itself has conspired to fill the void left by the gateway's absence.

Venture Deeper into the Darkness: With no gateway to dictate his path, Logan faces the forest's depths, where the light struggles to penetrate the thick canopy. The darkness before him is not just physical but symbolic, representing the path of solitude and the unknown challenges it brings. This singular road, shrouded in mystery and devoid of the guidance of ancient artifacts, offers Logan a journey into the very heart of the forest's secrets and, perhaps, into the depths of his own resolve.</p>`  
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV872edmV3533tXRnSSonnsxcl1M8ORzx2oSX6PDl73Kj878XwrkTm0DIBqSsCKrT6EgiglSpXBe-O117i-FFXHKiff1tvOp5r_gBTWgfSqxDoeNeqLY=w2400')";  
}

function ventureDeep () {
  
}







//ancientforest story


function village () {
  btn2.textContent = 'Investigate the Casket';
  btn3.textContent = 'Focus on Cleaning';
  btn3.removeEventListener('click', village);
  btn2.removeEventListener('click', ancientForest);
  btn4.removeEventListener('click', desertedCaves);
  btn4.style.display = 'none';
  text.innerHTML = `<p>Upon exploring the village, Logan encounters Arthur, an elderly man with a warm, welcoming smile. Arthur, leaning on his cane, introduces himself and listens intently as Logan explains his situation. Moved by Logan's plight, Arthur offers him a task.

"Logan, my boy," Arthur says, his voice as gentle as the breeze, "I have an old shack at the very end of the village. It's been years since I've been able to clean it out myself. Would you be willing to help an old man out? There might be some things of value you could take as payment."

Grateful for any opportunity to earn towards his goal, Logan agrees to help. Arthur's shack, as described, sits quietly at the edge of the village, its windows dusty and the door slightly ajar. Inside, Logan discovers a massive casket, half-open and casting an ominous shadow in the dim light. <br /><br />

Now, Logan faces a decision: <br /><br /> 

Investigate the Casket: Curiosity piqued, and with Arthur's mention of valuables, Logan considers opening the casket further, hoping it contains something that could help him. <br /><br />

Focus on Cleaning: Remembering Arthur's request, Logan thinks it might be best to focus on cleaning the shack, avoiding any potential dangers the casket might hold..</p>`;
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV87MhEeH-0WNPx4-wDUrcQ1MJG1BruFnHd1pKWYktFDgrdqnIB8K65v20sJodc0tFc6W2wiCUslXVzV2fzswC-mZsN4AwmpvwRLNC1GenJTg3QfTYkI=w2400')"
}
//vilage story




function desertedCaves () {
  btn3.removeEventListener('click', village);
  btn2.removeEventListener('click', ancientForest);
  btn4.removeEventListener('click', desertedCaves);
  btn2.textContent = 'Explore the Luminous Chamber';
  btn3.textContent = 'Descend into the Depths';
  btn4.textContent = 'Map the Caverns for Escape Routes';
  text.innerHTML = `<p>
In the shadow of the western hills, Logan finds the entrance to the Deserted Caves, a network of tunnels rumored to hold ancient artifacts and untold riches. The air is cool and heavy with the scent of earth and mystery. As he ventures deeper, the light from the entrance fades, leaving him to rely on his torch to navigate the winding passages.

However, Logan soon discovers that the caves are not as deserted as their name suggests. The echoes of his footsteps awaken the caverns, stirring whispers among the shadows. It's not long before he stands at a crucial juncture, faced with three distinct choices: <br /><br />

Explore the Luminous Chamber: A faint glow emanates from one of the tunnels, suggesting the presence of phosphorescent minerals or perhaps something more valuable. Investigating the chamber could lead to a significant discovery, but the light might also attract unwanted attention. <br /><br />

Descend into the Depths: A steep passage seems to plunge into the heart of the earth itself. Legends speak of a powerful artifact hidden in the deepest part of these caves, guarded by challenges that test both mind and body. The descent promises great rewards but at the risk of facing the unknown perils that lurk below. <br /><br />

Map the Caverns for Escape Routes: Realizing the dangers of the caves, Logan contemplates carefully mapping his path to ensure a safe return. This cautious approach might not yield immediate treasures but could uncover hidden paths or secrets missed by those who rush forward. <br /><br />

Each choice tests Logan's courage, wit, and determination, pushing him to decide whether to seek fortune, face the darkness, or prioritize safety in the mysterious and treacherous Deserted Caves.</p>`;
  
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV87Z5knYoT14SDxWiwbaSOzFTS28kP10J8-QsN3BPz5G3gJpCUHytKXjNAuVfpBaOq_B7yBhnKZyFs1sLX_UH9PlVHnh2aTVVFMedIFo5j8xNmiMmy4=w2400')";
}


btn4.addEventListener('click', desertedCaves)
btn3.addEventListener('click', village);
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
  game.style.display = "flex";
});