// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  // Pick which horn to display
  let hornType = document.getElementById('horn-select');
  let photo = document.querySelector('img');
  // For volume image and to get actual volume amount
  let volumeNum = document.getElementById('volume');
  let volumePhoto = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  // For the button and confetti and horn sound
  let playSound = document.querySelector('button');
  let hornSound = document.querySelector('audio');

  // changes horn display photo depending on what type is selected.
  hornType.addEventListener('change', () => {
    let hornPhoto = hornType.value;
    photo.src = "assets/images/" + hornPhoto + '.svg';
  })
  
  // changes volume photo depending on what value the volume is at.
  volumeNum.addEventListener('change', () => {
    let volumeValue = volumeNum.value;
    if (volumeValue == 0){
      volumePhoto.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volumeValue < 33){
      volumePhoto.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volumeValue < 67){
      volumePhoto.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumePhoto.src = 'assets/icons/volume-level-3.svg';
    }
  })

  // plays appropirate sound depending on what horn is selected
  playSound.addEventListener('click', () => {
    let hornPhotos = hornType.value;
    let volumeValue = volumeNum.value;
    if (hornPhotos == 'party-horn'){
      jsConfetti.addConfetti();
    }
    hornSound.volume = volumeValue / 100;
    hornSound.src = 'assets/audio/' + hornPhotos + '.mp3';
    hornSound.play();
  })
}