// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = null;

function init() {
  // to start the tts, press button
  let ptt = document.querySelector('button');
  // change the smiley face to open mouth when talking
  let photo = document.querySelector('img');
  // use the specified voice
  let botVoice = document.getElementById('voice-select');
  // find out what words to translate to speech
  let toTranslate = document.getElementById('text-to-speak');

  // to display the possible voices
  // got it from the developer website
  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      botVoice.appendChild(option);
    }
  })

  // to actually start the tts
  // again, from dev website but face change thing is self implemented
  ptt.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(toTranslate.value);
    const selectedOption = botVoice.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++){
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    speechSynthesis.speak(utterance);
    photo.src = "assets/images/smiling-open.png";
    utterance.addEventListener('end', () => {
      photo.src = "assets/images/smiling.png";
    })
  })
}