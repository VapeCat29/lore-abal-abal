const maudyIntroVoices = generateVoices(16, 'maudy', 'intro', 'maudy_scene1', 'mp3');
const dikaIntroVoices = generateVoices(4, 'dika', 'intro', 'dika_scene1', 'mp3');

function generateVoices(length, character, identifier, directory, extension = 'mp3') {
    const voices = {};
  
    Array.from({length}, (_, i) => i + 1).forEach((index) => {
      const key = `${character}_${identifier}_${index}`;
      voices[key] = `${directory}/${key}.${extension}`;
    });
  
    return voices;
}

// Define the voice files used in the game.
monogatari.assets ('voices', {
    ...maudyIntroVoices,
    ...dikaIntroVoices,
});