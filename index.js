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



function startstart () {
  btn1.removeEventListener('click', startstart);
  btn1.style.display = 'none';
  btn2.style.display = "block";
  btn3.style.display = "block";
  btn4.style.display = "block";
  btn4.addEventListener('click', desertedCaves)
  btn3.addEventListener('click', village);
  btn2.addEventListener('click', ancientForest);
  btn4.textContent = 'Deserted Caves';
  btn3.textContent = 'Village';
  btn2.textContent = 'Ancient Forest';
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
}

btn1.addEventListener('click', startstart);

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
btn2.addEventListener('click', glowingRune);
btn3.style.display = 'none';
text.innerHTML = `In the heart of the Ancient Forest, Logan stands before a mysterious, sealed gateway. Its surface is covered in enigmatic runes, with one in the center glowing more brightly than the rest. <br /><br />

Touch the Glowing Rune: Feeling a powerful draw towards the glowing rune, Logan considers reaching out to touch it. This direct action could activate the gateway, possibly opening a path or revealing secrets needed to proceed. However, touching the rune might also trigger protective spells or transport him to an unknown location, presenting an immediate and unpredictable risk.
</p>`;

gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV872rwfZ2xPisiglPJ9oqPqgUh0Q4_UM4aqYKAoEdks61SSWizqbS0vMiEu-15LleBnk8wrsOSiBVwfCAKubrRmQO5jAE1KDigV7DCicUaV1D_2sI2Y=w2400')";
}

function glowingRune () {
  btn2.removeEventListener('click', glowingRune);
  btn2.textContent = 'Wealth';
  btn2.addEventListener('click', wealthend);
  btn3.style.display = 'block';
  btn3.textContent = 'Sacrifice and Hope'
  btn3.addEventListener('click', hope);
  text.innerHTML = `
Upon touching the glowing rune, Logan is momentarily blinded by a surge of light. As his vision clears, he sees two distinct paths unfurling before him, each promising a different outcome for his journey:<br /><br />

Path of Endless Wealth: This path leads Logan through a portal shimmering with golden light, where he's promised endless wealth and the resources to save the lighthouse—his family's legacy. The air is thick with the scent of treasure, and visions of gold and jewels dance before his eyes, each step making the promises more tangible. However, a whisper in the wind carries a dire warning: this wealth comes at a cost—the life of Kayla's brother, whose fate is somehow intertwined with the treasures that lie ahead. Choosing this path means securing the future of the lighthouse, but it condemns Kayla's brother to a grim fate. <br /><br />

Path of Sacrifice and Hope: The other path is less inviting, shrouded in mist and uncertainty, but it holds the promise of finding Kayla's brother alive. This route demands resilience and sacrifice from Logan, offering no riches or guarantees, except for the slim hope of saving an innocent life. The path winds deep into the heart of the forest, where ancient magic and perilous trials await, testing his courage and determination to its limits. <br /><br />

Faced with this pivotal decision, Logan stands at the crossroads of destiny, his heart torn between the salvation of his family's legacy and the moral imperative to save a life. The choice he makes now will define his journey and its consequences for those he aims to protect.</p>`;

gameimg.style.backgroundImage = "https://lh3.googleusercontent.com/pw/ABLVV87Tu6xugrXaMWLGeGKjApq1tA6hf-x0gehtTrprI51gRoJ6orB5RT80K3bxgft_X8G3XR6NKNRbQzvnRvSYRLxRSEA1Ujd1sZYV25K49R2x3LCHSFI=w2400')";
  
}

function hope () {
  btn3.removeEventListener('click', hope);
  btn2.removeEventListener('click', wealthend);
  btn2.textContent = 'Whispering Winds';
  btn3.textContent = 'Crimson Moon';
  btn4.style.display = 'block'
  btn4.textContent = 'Emerald Dawn';
  text.innerHTML = `<p>
In the heart of the Ancient Forest, where fate hangs by a thread, Logan encounters a mystical clearing. Here, three stone pedestals rise from the earth, each inscribed with a riddle that conceals the nature of the path it represents. To proceed, Logan must solve these riddles and choose his path wisely: <br /><br />

Riddle of the Whispering Winds:
"I speak without a mouth and hear without ears. I bear no fruit, yet I guide the lost. Follow me to where shadows dance, but heed the cost, for strength may wane in my advance." <br /><br />

Riddle of the Crimson Moon:
"I light the night with blood, not gold. A path so bold, where stories end untold. Through me, the heart beats fast, for my way is cast with risks so vast." <br /><br />

Riddle of the Emerald Dawn:
"My light is hope in the darkest hours, a path not steeped in power. Through trials and pain, my followers gain, emerging without a bane." <br /><br />

To find Kayla's brother and navigate the perils of the Ancient Forest, Logan must decipher these cryptic messages. His choice will determine the journey ahead, testing his wit and resolve in the face of the forest's ancient magic. </p>`

gameimg.style.backgroundImage = "https://lh3.googleusercontent.com/pw/ABLVV86VxW41RInT6yEh1fZ-tIjhfBI6j1TZmiRFZCzC-4nTmxQkQPY8sMlXtiO3lkZNq7rfBFJbfNkTeC06LFHFi4DBnmOwSDjypOp_6EYAs0tejiB7I_4=w2400')";

}

function wealthend () {
  btn2.removeEventListener('click', wealthend);
  btn3.style.display = 'none';
  text.innerHTML = `
Choosing the path of wealth, Logan steps into the light, his eyes dazzled by visions of gold and treasures beyond imagination. The path leads him through a landscape that shifts and shimmers, each step weighted with the heavy clink of coins and the whisper of silk. Around him, the air is thick with the scent of opulence, and the very ground seems to sparkle with the promise of endless riches.

But as he ventures further, the light begins to fade, replaced by a creeping darkness that swallows the path behind him. The treasures that once seemed so tangible turn to dust, slipping through his fingers like shadows at dusk. The air grows cold, and a profound silence envelops him, the kind of silence that speaks of endings rather than beginnings.

Logan realizes too late the true cost of his choice. The wealth he sought is an illusion, a mirage that led him not to salvation but to a solitary demise. In his final moments, the forest around him is no longer a place of mystery and magic but a tomb, its ancient trees standing as silent witnesses to his downfall.

The gateway, the source of his fateful journey, remains sealed to the world he left behind. No tale of his end will ever reach Kayla or the lighthouse; he becomes a whisper lost in the wind, a cautionary tale of greed and sacrifice untold. And so, Logan's story concludes not with triumph but with a quiet surrender to the forest's embrace, a stark reminder of the choices that define us and the legacies we leave behind. </p>`;
health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 0`;
btn2.addEventListener('click', endGame);
btn2.textContent = 'End Game';
  
  
}



//helpKayla



function carryOn () {
  btn3.removeEventListener('click', carryOn);
  btn2.removeEventListener('click', helpKayla);
  btn2.addEventListener('click', ventureDeep);
  btn2.textContent = 'Venture Deeper into the Darkness';
  btn3.style.display = 'none';
  text.innerHTML = `<p>
In the dense, shadowed expanse of the Ancient Forest, Logan's decision to forgo aiding Kayla in her quest to find her brother leads him down a path markedly different from the tales of enchanted gateways and glowing runes. As he ventures deeper, the expectation of confronting a mysterious, rune-adorned gateway dissipates into the forest mist. Instead, Logan finds himself at the edge of an eerily silent clearing, where the air hangs heavy with the scent of old magic and untold stories.

The ground in front of him bears a large, unexplained depression, a stark reminder of where the fabled gateway should have stood. Yet, in this reality, shaped by his choices, there is no gateway, no glowing runes—only the impression of something ancient that once was but is now absent. The forest around this clearing seems darker, the trees closer, as if nature itself has conspired to fill the void left by the gateway's absence.

Venture Deeper into the Darkness: With no gateway to dictate his path, Logan faces the forest's depths, where the light struggles to penetrate the thick canopy. The darkness before him is not just physical but symbolic, representing the path of solitude and the unknown challenges it brings. This singular road, shrouded in mystery and devoid of the guidance of ancient artifacts, offers Logan a journey into the very heart of the forest's secrets and, perhaps, into the depths of his own resolve.</p>`  
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV872edmV3533tXRnSSonnsxcl1M8ORzx2oSX6PDl73Kj878XwrkTm0DIBqSsCKrT6EgiglSpXBe-O117i-FFXHKiff1tvOp5r_gBTWgfSqxDoeNeqLY=w2400')";  
}

function ventureDeep () {
  btn2.textContent = 'End Game';
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 0`;
  btn2.removeEventListener('click', ventureDeep);
  btn2.addEventListener('click', endGame);
  text.innerHTML = `<p>
As Logan ventures deeper into the darkness, he finds himself consumed by the oppressive shadows of the Ancient Forest. Without the guidance of the enchanted gateway, he becomes lost in the labyrinthine depths, unable to find his way back. Each step forward leads him further into the unknown, until he is swallowed whole by the darkness, his fate forever sealed within the ancient woods.

With no hope of escape and no one to hear his cries, Logan's journey ends here, lost to the depths of the forest forever. The tales of his bravery and his quest to save the lighthouse fade into obscurity, overshadowed by the grim reality of his untimely demise. And so, the legend of Logan, the valiant adventurer, comes to a tragic end, his fate a cautionary tale of the dangers that lurk within the Ancient Forest's shadowed expanse.</p>`;
  

gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV872edmV3533tXRnSSonnsxcl1M8ORzx2oSX6PDl73Kj878XwrkTm0DIBqSsCKrT6EgiglSpXBe-O117i-FFXHKiff1tvOp5r_gBTWgfSqxDoeNeqLY=w2400')"  
  
}

function endGame () {
  btn2.removeEventListener('click', endGame);
  btn2.style.display = 'none';
  btn3.style.display = 'none';
  btn4.style.display = 'none';
  btn1.style.display = 'block';
  btn1.textContent = 'Next';
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 100`;
  currentHealth = 100;
  btn1.addEventListener('click', startstart);
  text.innerHTML = `<p>On the rugged northern coast, where the relentless sea clashes with the sky, the once proud lighthouse that Logan Hartwell and his family called home stands broken and neglected. Severe conditions have ravaged the land, leaving the lighthouse in ruins, and with it, the family's livelihood has crumbled away. Strapped for resources, Logan has been unable to repair the beacon of hope that once guided ships to safety.

The situation grows dire as the kingdom imposes a heavy late tax on the land. Logan faces an ultimatum: pay 5000 gold within a two week time span or watch as the authorities seize the property that has been in his family for generations. With no money to his name and the weight of the future pressing down on him, Logan learns of opportunities for adventure and treasure beyond the familiar shores.

Drawn to the promise of wealth and a chance to save his family's legacy, Logan is poised to venture into the unknown. This new path is fraught with peril, but the potential rewards offer the only glimmer of hope to restore the lighthouse and secure his family's home. This tale of Logan Hartwell is set to become one of courage, sacrifice, and the desperate measures one man will take to protect everything he holds dear.</p>`;
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV87GMLcC3ZxqLQCThsAljc16DYeVq42vouT3aShe4--RHVbZGj-VJuN7M-4T89lQJTLCuINA46UrLAJjtlK_q2uUyFxsA3z_1r_tPlkh4ZM0YwZZboQ=w2400')"

  currentHealth -= 100;
  if (currentHealth === 0) {
    startscreen.classList.toggle('hide')
    game.style.display = "none";
    return;
  }
  
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






function penalty () {
  currentHealth = healthValue - Math.floor(Math.random() * 11) + 1;
}


newgame.addEventListener('click', function() {
  startscreen.classList.toggle('hide')
  game.style.display = "flex";
});