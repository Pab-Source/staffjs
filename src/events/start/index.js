import * as Tone from "tone";

const start = async (sound, element, note, isLine, typeSound = "Synth") => {
  const synth = new Tone["MembraneSynth"]().toDestination();
  await Tone.start();
  synth.triggerAttackRelease(sound, "8n");
  element.append(note(isLine));
  element.removeEventListener("click", () => {}, true);
  console.log(sound);
};

export default start;
