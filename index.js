const newgame = document.getElementById('newgame');
const startscreen = document.querySelector('.startscreen')
const game = document.getElementById('game');

newgame.addEventListener('click', function() {
  startscreen.classList.toggle('hide')
  game.style.display = "block";
});

