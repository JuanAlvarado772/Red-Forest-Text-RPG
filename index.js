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
let savevillage = false;
let forestcomplete = false;
let villagecomplete = false;
let cavescomplete = false;
 

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
  btn2.addEventListener('click', whisperingwinds)
  btn3.textContent = 'Crimson Moon';
  btn3.style.display = 'block'
  btn3.addEventListener('click', crimsonMoon)
  btn4.style.display = 'block'
  btn4.textContent = 'Emerald Dawn';
  btn4.addEventListener('click', emerald);
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

function whisperingwinds () {
  btn2.removeEventListener('click', whisperingwinds);
  btn2.style.display = 'none';
  btn3.textContent = 'Crimson Moon';
  btn3.addEventListener('click', crimsonMoon)
  btn4.style.display = 'block'
  btn4.textContent = 'Emerald Dawn';
  text.innerHTML = `<p>Logan decides to follow the path of the Whispering Winds, guided by the unseen voices of the forest. As he ventures deeper, the air grows colder, and the light dims, the path becoming increasingly difficult to navigate. The whispers grow louder, urging him on, yet with each step, his energy seems to drain away, sapped by an invisible force. In the densest part of the forest, Logan stumbles upon a hidden grove, where the wind's whispers reveal the location of a crucial artifact needed to save Kayla's brother. However, the journey leaves him weakened, having lost a significant portion of his strength to the forest's enchantment. The artifact turned out to be a hoax, Logan must now find the correct riddle and save Kayla's brother.
  </p>`;
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 50`;
  currentHealth -= 50;

gameimg.style.backgroundImage = "https://lh3.googleusercontent.com/pw/ABLVV867u2t4_6hulCzlmR_ez7H3G_0sp-Knvpg1bHF7U2gs7_1DOC6V31P9wdMHnGM1JNgFONJbnrtzvh1URexJznvYOvnW8IzwVMHL0AaZ7pNVwFLF5vQ=w2400";  
}

function crimsonMoon () {
  btn2.style.display = 'block';
  btn3.removeEventListener('click', crimsonMoon);
  btn2.textContent = 'End Game';
  btn3.style.display = 'none';
  btn4.style.display = 'none'; 
  btn2.addEventListener('click', endGame)
  text.innerHTML = `<p>Choosing the path of the Crimson Moon, Logan walks under a sky painted with a blood-red moon, its eerie light casting long shadows. The path is fraught with danger; ferocious beasts and treacherous terrain test Logan's courage and skill. In a dramatic encounter, Logan faces a creature of the night, a guardian of the forest's secrets. The battle is fierce, and though Logan fights valiantly, he is ultimately overwhelmed, his journey ending under the crimson light, a stark reminder of the path's perilous promise.</p>`;
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 0`
  currentHealth = 0;    
}

function emerald() {
  // Correct the removal of event listeners
  btn4.removeEventListener('click', emerald);
  btn3.removeEventListener('click', crimsonMoon);
  btn2.removeEventListener('click', whisperingwinds);

  // Mark the forest path as complete
  forestcomplete = true;
  goldValue += 1500

  // Update the game state based on what's completed
  updateGameStateV();
}

function updateGameStateV() {
  // Hide all buttons by default to reset the state
  btn2.style.display = 'none';
  btn3.style.display = 'none';
  btn4.style.display = 'none';

  // Check which paths have been completed and update the UI accordingly
  if (!cavescomplete) {
    btn3.style.display = 'block';
    btn3.textContent = 'Travel to the Deserted Caves';
    btn3.addEventListener('click', desertedCaves);
  }

  if (!villagecomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Venture to the Nearest Village';
    btn2.addEventListener('click', village);
  }

  // If all paths are complete, offer a way to finalize the game
  if (forestcomplete && cavescomplete && villagecomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Complete Game';
    btn2.removeEventListener('click', village); // Make sure to clean up any old listeners
    btn2.removeEventListener('click', desertedCaves);
    btn2.addEventListener('click', ending);
  }

  // Adjust text and image for the next part of the story
text.innerHTML = `<p>
Navigating the Emerald Dawn's path, Logan is guided by the first light of dawn through puzzles that challenge yet enlighten him. Along the way, he encounters aids in various forms: lights that guide, herbs that heal, and charms that protect. Each obstacle imparts wisdom and fortifies his resolve. Deep within the forest, he finds Kayla's brother, safe and sound. Together, they make their way out of the forest, emerging at dawn, their spirits lifted by the ordeal they've overcome.

Upon their return, a joyful Kayla awaits, her gratitude immeasurable. In thanks for Logan's bravery and kindness, she rewards him with 1500 gold, a token of her immense appreciation for bringing her brother back safely. One Step closer to restoring the lighthouse.</p>`;
  
gold.innerHTML = `<i class="fa-solid fa-coins" style="color: #b7961f;"></i>    ${goldValue}`
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
  healthValue = 100;
  currentHealth = 100;
  goldValue = 0
  savevillage = false;
  forestcomplete = false;
  villagecomplete = false;
  cavescomplete = false;
  map = false;
  depths = false
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
  btn2.addEventListener('click', casket)
  btn3.textContent = 'Focus on Cleaning';
  btn3.addEventListener('click', clean)
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


function clean () {
  text.innerHTML = `<p>Choosing to focus on cleaning, Logan bypasses the mysterious casket. As he tidies the shack, the village's peculiar stillness grows more apparent. Hours blend into days, and Logan begins to feel a disconnection from his past, his memories fading like the setting sun. Despite completing his task, the realization that time has ensnared him comes too late. Gradually, Logan forgets his true name and the initial purpose that led him to this village, becoming another timeless resident in the eternal loop, his original intentions lost to the ages.</p>`;
  btn3.removeEventListener('click', clean);
  btn2.removeEventListener('click', casket);
  btn3.style.display = 'none';
  btn2.addEventListener('click', endGame);
  btn2.textContent = 'End Game';
}

function casket () {
  btn3.removeEventListener('click', clean);
  btn2.removeEventListener('click', casket);
  btn2.textContent = 'Vital Essence';
  btn2.addEventListener('click', vitalEssence);
  btn3.textContent = 'Wealth Sacrifice';
  btn3.addEventListener('click', chaliceOfWealth)
  btn4.style.display = 'block'
  btn4.textContent = 'Liberation';
  btn4.addEventListener('click', liberation);
  text.innerHTML = `<p>
Upon opening the casket, Logan is met with a gleaming orb that splits the room into three distinct beams of light, each leading to a different relic. The air shimmers with power, and a voice, ancient as the forest itself, lays before him his options:

Orb of Vital Essence: A pulsating, emerald light surrounds the first relic, a small vial filled with a liquid that sparkles with life.

Chalice of Wealth's Sacrifice: Bathed in golden radiance, the second relic beckons. This ornate chalice demands all of Logan's accumulated gold in exchange for a key—a key to an unknown treasure within the forest, possibly greater than what he sacrifices. Yet, this choice focuses on material wealth, potentially diverting him from uncovering the truth behind the village's perpetual dusk.

Crystal of Liberation: The final relic, a crystal pulsing with a soft, blue light, offers the most daunting choice. The voice entreats Logan to use the crystal to shatter the village's timeless curse, freeing its inhabitants but forsaking his quest for personal gain. This path leads to no immediate reward and demands a selfless act to help those trapped in an endless cycle of non-existence, possibly the key to unraveling the village's mysteries and ending its sorrow.

Each relic presents Logan with a path that tests his priorities: personal gain, pursuit of wealth, or the well-being of others. His decision will not only affect his fate but also that of the village ensnared in an ancient enchantment.</p>`
  
}





function chaliceOfWealth () {
  btn4.removeEventListener('click', liberation)
  btn2.removeEventListener('click', vitalEssence)
  btn3.removeEventListener('click', chaliceOfWealth);
  text.innerHTML = `<p>As Logan hands over his hard-earned gold in exchange for the ornate chalice and the promised key, a sense of unease settles over him. Ignoring the plight of the village and succumbing to the allure of material wealth, he descends deeper into the forest, blinded by the gleam of gold.

Upon reaching the hidden chamber, Logan finds it overflowing with treasures beyond his wildest dreams. The glimmer of gold and jewels blinds him to the consequences of his actions as he fills his pockets with riches, ignoring the nagging guilt tugging at his conscience.</p>`
  goldValue += 2500;
  savevillage = false;
  villagecomplete = true;
  gold.innerHTML = `<i class="fa-solid fa-coins" style="color: #b7961f;"></i>    ${goldValue}`
  updateGameStateVillage()
  
}


function vitalEssence () {
  btn4.removeEventListener('click', liberation)
  btn3.removeEventListener('click', chaliceOfWealth);
  btn2.removeEventListener('click', vitalEssence);
  currentHealth = 150;
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> 150`;
  text.innerHTML = `<p>The voice promises restoration and strength, offering Logan 50 health if he chooses to embrace the vial's contents. However, this choice leaves the secrets of the village and its curse unexplored, his journey inward ending with personal gain but no deeper understanding.</p>`;
  villagecomplete = true;
  savevillage = false;
  updateGameStateVillage()
}

function liberation () {
  btn4.removeEventListener('click', liberation)
  btn3.removeEventListener('click', chaliceOfWealth);
  btn2.removeEventListener('click', vitalEssence);
  text.innerHTML = `<p>Logan stands before the relics, the weight of his choice pressing heavily upon him. The Orb of Vital Essence, Chalice of Wealth's Sacrifice, and Crystal of Liberation each shimmer with an allure that speaks to different facets of his heart. Yet, as the voice of the ancient forest whispers through the beams of light, Logan's gaze fixes upon the Crystal of Liberation. In that moment, the allure of personal gain and wealth fades before the echoing plea for freedom from the villagers trapped in a curse.

With a steady hand, Logan reaches for the crystal. Its cool surface pulses against his skin, a heartbeat of hope for the village. He understands the path he chooses is devoid of personal glory or treasure; it is a path carved with the intention of healing and liberation.

As dawn breaks, Logan stands at the edge of the village, the crystal in hand, its soft blue light mingling with the first rays of sunlight. The villagers, unaware of the impending change, go about their morning, trapped in the ceaseless cycle of dusk and dawn.

Logan raises the crystal towards the sky, and with a voice firm with resolve, he recites the incantation the ancient voice had imparted to him. A beam of light erupts from the crystal, piercing the sky. The air thrums with power as the light expands, enveloping the village in a dome of pulsating energy.

The villagers stop in their tracks, their eyes wide as they witness the impossible. The curse that had gripped their lives, their very existence, begins to fray at the edges. The endless cycle of non-existence they had been bound to starts to unravel, thread by thread, until with a final pulse of the crystal's light, the curse shatters.

Tears of joy and disbelief mingle as the villagers embrace one another, their lives no longer bound to the whims of an ancient enchantment. Logan watches, a quiet observer to the happiness he has wrought. Though his pockets are no heavier, his heart is full, knowing he has chosen a path that has freed a village from sorrow.

As he prepares to leave, a newfound respect and gratitude from the villagers in his wake, Logan realizes that some rewards cannot be measured in gold or artifacts. In choosing the well-being of others over his own gains, he has found a treasure far greater—the knowledge that one person can indeed make a difference. This act, selfless and bold, becomes the first step in unraveling the mysteries that lie beyond, with the liberated village standing as a testament to the power of choice and the strength of character.

And so, Logan's journey continues, the Crystal of Liberation now a beacon of his legacy, a reminder that true liberation comes not from the relics we possess, but from the choices we make and the lives we touch.</p>`
  
savevillage = true;
villagecomplete = true;
updateGameStateVillage();
}


function updateGameStateVillage() {
  // Hide all buttons by default to reset the state
  btn2.style.display = 'none';
  btn3.style.display = 'none';
  btn4.style.display = 'none';

  // Check which paths have been completed and update the UI accordingly
  if (!cavescomplete) {
    btn3.style.display = 'block';
    btn3.textContent = 'Travel to the Deserted Caves';
    btn3.addEventListener('click', desertedCaves);
  }

  if (!forestcomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Venture to Ancient Forest';
    btn2.addEventListener('click', ancientForest);
  }

  // If all paths are complete, offer a way to finalize the game
  if (forestcomplete && cavescomplete && villagecomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Complete Game';
    btn2.removeEventListener('click', village); // Make sure to clean up any old listeners
    btn2.removeEventListener('click', desertedCaves);
    btn2.addEventListener('click', ending);
  }

}


//vilage story




function desertedCaves () {
  btn3.removeEventListener('click', village);
  btn2.removeEventListener('click', ancientForest);
  btn4.removeEventListener('click', desertedCaves);
  btn2.removeEventListener('click', village);
  if (btn2.style.display = 'none') {
    btn2.style.display = 'block';
  }
  if (btn3.style.display = 'none') {
    btn3.style.display = 'block'
  }
  if (btn4.style.display = 'none') {
    btn4.style.display = 'block'
  }
  
  
  btn2.textContent = 'Explore the Luminous Chamber';
  btn3.textContent = 'Descend into the Depths';
  btn3.addEventListener('click', descend);
  btn4.textContent = 'Map the Caverns for Escape Routes';
  btn4.addEventListener('click', mapcavern)
  text.innerHTML = `<p>
In the shadow of the western hills, Logan finds the entrance to the Deserted Caves, a network of tunnels rumored to hold ancient artifacts and untold riches. The air is cool and heavy with the scent of earth and mystery. As he ventures deeper, the light from the entrance fades, leaving him to rely on his torch to navigate the winding passages.

However, Logan soon discovers that the caves are not as deserted as their name suggests. The echoes of his footsteps awaken the caverns, stirring whispers among the shadows. It's not long before he stands at a crucial juncture, faced with three distinct choices: <br /><br />

Explore the Luminous Chamber: A faint glow emanates from one of the tunnels, suggesting the presence of phosphorescent minerals or perhaps something more valuable. Investigating the chamber could lead to a significant discovery, but the light might also attract unwanted attention. <br /><br />

Descend into the Depths: A steep passage seems to plunge into the heart of the earth itself. Legends speak of a powerful artifact hidden in the deepest part of these caves, guarded by challenges that test both mind and body. The descent promises great rewards but at the risk of facing the unknown perils that lurk below. <br /><br />

Map the Caverns for Escape Routes: Realizing the dangers of the caves, Logan contemplates carefully mapping his path to ensure a safe return. This cautious approach might not yield immediate treasures but could uncover hidden paths or secrets missed by those who rush forward. <br /><br />

Each choice tests Logan's courage, wit, and determination, pushing him to decide whether to seek fortune, face the darkness, or prioritize safety in the mysterious and treacherous Deserted Caves.</p>`;
  
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/ABLVV87Z5knYoT14SDxWiwbaSOzFTS28kP10J8-QsN3BPz5G3gJpCUHytKXjNAuVfpBaOq_B7yBhnKZyFs1sLX_UH9PlVHnh2aTVVFMedIFo5j8xNmiMmy4=w2400')";
}


let map = false;
let depths = false;

function lumin () {
  btn4.removeEventListener('click', mapcavern);
  btn3.removeEventListener('click', descend);
  btn2.removeEventListener('click', lumin); 
  text.innerHTML = `<p>As Logan greedily gathers the shimmering gemstones, the cavern's gentle glow intensifies, revealing the true nature of his surroundings. The crystals were not simply sources of light but the life force of the subterranean creatures that call this chamber home. With a collective hiss, the creatures emerge from the shadows, their eyes gleaming with fury at the intruder who dared disturb their sanctuary.

Cornered and outnumbered, Logan's attempts to defend himself are futile against the relentless onslaught of the creatures. Their sharp claws and venomous fangs inflict grievous wounds, leaving him battered and near defeat. With the last of his strength, Logan manages to break free from the creatures' grasp and make a desperate dash towards the tunnel entrance.

Despite his efforts, Logan is unable to outrun the pursuing horde. As he reaches the mouth of the tunnel, exhaustion overtakes him, and he collapses to the ground, surrounded by the creatures' menacing forms. In his final moments, he reflects on his folly, realizing too late the consequences of his greed.

As darkness descends, Logan's fate is sealed, his body becoming another grim reminder of the perils that await those who seek fortune in the depths of the Luminous Chamber. </p>`
  btn3.style.display = 'none';
  btn4.style.display = 'none';
  currentHealth = 0;
  health.innerHTML = `<i class="fa-solid fa-heart" style="color: #cd0e47;"></i> ${currentHealth}`;
  btn2.addEventListener('click', endGame);
  btn2.textContent = 'End Game';
}


function descend () {
  btn4.removeEventListener('click', mapcavern);
  btn3.removeEventListener('click', descend);
  text.innerHTML = `<p>Descend into the Depths: Steeling himself for the perilous descent, Logan begins his journey into the depths of the caves. With each step, the air grows colder, and the darkness more oppressive. Yet, fueled by the promise of untold riches, he presses on. As he reaches the lowest point of the caves, he discovers a chamber bathed in an eerie blue light, emanating from a mysterious artifact—a crystalline orb said to possess the power to control the elements. Ignoring the warnings of danger, Logan reaches out to claim the artifact, triggering a series of catastrophic events. The ground begins to tremble, and the chamber starts to collapse around him. Desperate to escape, Logan narrowly avoids falling debris and manages to flee the crumbling caverns, clutching the artifact tightly in his hand. However, as he emerges from the caves, he realizes that the power he sought may come at a grave cost.</p>`
 goldValue += 3500;
 gold.innerHTML = `<i class="fa-solid fa-coins" style="color: #b7961f;"></i>    ${goldValue}`;
 depths = true;
 cavescomplete = true;
 updateGameStateCaves()
}


function mapcavern () {
  btn4.removeEventListener('click', mapcavern);
  text.innerHTML = `<p>Map the Caverns for Escape Routes: Diligently mapping his surroundings, Logan carefully navigates the labyrinthine caves, meticulously noting potential escape routes and hidden dangers. His efforts lead him to a chamber filled with ancient artifacts, each whispering tales of forgotten civilizations and lost treasures. Among the relics, Logan discovers a curious-looking amulet, adorned with strange symbols and pulsating with a faint, otherworldly glow. Sensing its significance, he adds the amulet to his collection, unaware of the darkness it carries.
As Logan makes his way back to the entrance, he begins to feel a strange unease creeping over him. The air grows heavy, and shadows seem to dance around him, whispering sinister secrets. Suddenly, a chilling realization dawns upon him—the amulet he took holds a malevolent power, awakening ancient spirits that now hunger for his soul.

With each step, the darkness closes in, and Logan finds himself ensnared in a sinister trap of his own making. Desperate to escape the grasp of the malevolent spirits, he races against time, his every move fraught with peril. In the end, as he emerges from the caves, he carries not only the relics he discovered but also the heavy burden of a debt owed to the shadows—a debt that may cost him far more than he ever imagined.</p>`;
gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczNSTQSglExgA6IzQ1HKiJcqe54Y6nb4r7o_zlav5F_OCZgHcuCz2uisfsiP1PT8sSJtL5nL_xVVddPVmQLiXUSd_6GA8dri86tuV7ihYkCJ-PLPfQo=w2400')";

  map = true;
  cavescomplete = true;
  goldValue += 3500;
  gold.innerHTML = `<i class="fa-solid fa-coins" style="color: #b7961f;"></i>    ${goldValue}`
  updateGameStateCaves()
}

function updateGameStateCaves() {
  // Hide all buttons by default to reset the state
  btn2.style.display = 'none';
  btn3.style.display = 'none';
  btn4.style.display = 'none';

  // Check which paths have been completed and update the UI accordingly
  if (!villagecomplete) {
    btn3.style.display = 'block';
    btn3.textContent = 'Travel to the nearest Village';
    btn3.addEventListener('click', village);
  }

  if (!forestcomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Venture to Ancient Forest';
    btn2.addEventListener('click', ancientForest);
  }

  // If all paths are complete, offer a way to finalize the game
  if (forestcomplete && cavescomplete && villagecomplete) {
    btn2.style.display = 'block';
    btn2.textContent = 'Complete Game';
    btn2.removeEventListener('click', village); // Make sure to clean up any old listeners
    btn2.removeEventListener('click', desertedCaves);
    btn2.addEventListener('click', ending);
  }

}


function ending () {
  btn2.removeEventListener('click', ending);
  btn2.addEventListener('click', endGame);
  btn3.style.display = 'none';
  btn4.style.display = 'none';
  //good endings
  if (goldValue === 5000 && map && !depths && savevillage ) {
    text.innerHTML = `<p>By choosing the depths, Logan acquires a powerful artifact that promises immense power but also poses great risks. Despite the danger, his intent to save the village prevails. Using the wealth gained from this daring expedition, Logan pays off the debt and invests in the community. The curse of the artifact is broken through a selfless act of using its power for the greater good, restoring the lighthouse and ensuring the village's prosperity. The darkness that once loomed is dispelled, and Logan is celebrated as a true hero, his legacy intertwined with the lighthouse's enduring light.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczNQUeSMcxj6iiC5XqXk3fmB_tZfoicyP4-U4hQ49qAHbqFNZxZh-AxTIv4uxaBRp6f19aj0jG3GjTgNliewYpRnhXNSnogFLhUwo76_rp08Qo2xBL0=w2400')";
  }
  
  if (goldValue === 5000 && depths && !map && savevillage ) {
    text.innerHTML = `<p>Logan's meticulous mapping of the caverns leads him to ancient relics, among them a sinister amulet. Despite its malevolent aura, he uses the knowledge and wealth gained to benefit the village. By choosing to save the village over succumbing to the amulet's dark allure, the curse is lifted. The village thrives, the lighthouse shines brighter than ever, and Logan finds peace, knowing he has preserved his family's legacy and protected those he holds dear.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczNQUeSMcxj6iiC5XqXk3fmB_tZfoicyP4-U4hQ49qAHbqFNZxZh-AxTIv4uxaBRp6f19aj0jG3GjTgNliewYpRnhXNSnogFLhUwo76_rp08Qo2xBL0=w2400')";
  }
  
  if (goldValue > 5000 && depths && !map && !savevillage) {
    text.innerHTML = `<p> Logan's venture into the depths grants him an artifact of great power and wealth beyond the necessary 5000 gold. However, his greed overshadows his duty to the village. The curse of the artifact, fueled by Logan's greed, brings ruin instead of prosperity. The lighthouse crumbles further, and the village suffers. Logan lives in isolation, haunted by his choices, a cautionary tale of greed overshadowing duty.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczOmxKX9enga_ntZdz3vo7BPscgoIU6Kc4hTjNi597uGT9OkRsnQvSG1ZMkNgponm2h4c0-Pk9JBL-gkh9Y110MLEKsyejI8SLjfhYUF51FOnLwTlGk=w2400')";
  }
  if (goldValue > 5000 && map && !depths && !savevillage) {
    text.innerHTML = `<p>With wealth accumulated from mapping the caverns and discovering relics, including the amulet, Logan chooses personal gain over the village's welfare. The curse of the amulet intensifies, casting a shadow over the land. The lighthouse, a symbol of hope, is lost to neglect, and the village's decline is inevitable. Logan's legacy is marred by betrayal, and he is left to wander, a rich man in a broken world.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczOmxKX9enga_ntZdz3vo7BPscgoIU6Kc4hTjNi597uGT9OkRsnQvSG1ZMkNgponm2h4c0-Pk9JBL-gkh9Y110MLEKsyejI8SLjfhYUF51FOnLwTlGk=w2400')";
  }
  
  if (goldValue === 5000 && depths && !map && !savevillage) {
    text.innerHTML = `<p>Logan acquires the artifact and wealth from the depths, choosing neither to save the village nor to indulge in excessive greed. His focus on personal survival and power isolates him from the community. While he does not suffer the extreme consequences of greed, he lives a solitary life, disconnected from the village he could have saved. The lighthouse stands neglected, a reminder of what could have been.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczOmxKX9enga_ntZdz3vo7BPscgoIU6Kc4hTjNi597uGT9OkRsnQvSG1ZMkNgponm2h4c0-Pk9JBL-gkh9Y110MLEKsyejI8SLjfhYUF51FOnLwTlGk=w2400')";
  }
  if (goldValue === 5000 && map && !depths && !savevillage) {
    text.innerHTML = `<p>After mapping the caverns and securing ancient treasures, Logan prioritizes his own interests, neither saving the village nor hoarding wealth. The curse of the amulet lingers, a personal burden rather than a communal disaster. He exists on the fringes, wealthy yet alone, as the village fades and the lighthouse dims. Logan's story is one of missed opportunities and solitude, a testament to the cost of indifference.</p>`;
    gameimg.style.backgroundImage = "url('https://lh3.googleusercontent.com/pw/AP1GczOmxKX9enga_ntZdz3vo7BPscgoIU6Kc4hTjNi597uGT9OkRsnQvSG1ZMkNgponm2h4c0-Pk9JBL-gkh9Y110MLEKsyejI8SLjfhYUF51FOnLwTlGk=w2400')";
  }
  
  
  
}




function penalty () {
  currentHealth = healthValue - Math.floor(Math.random() * 11) + 1;
}


newgame.addEventListener('click', function() {
  startscreen.classList.toggle('hide')
  game.style.display = "flex";
});