// Function to play a note using Tone.js
function playNote() {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
}

// VexFlow rendering logic for the stave and notes
window.onload = function() {
  const { Renderer, Stave, Note } = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element named "output".
  const div = document.getElementById('output');
  const renderer = new Renderer(div, Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(500, 500);
  const context = renderer.getContext();

  // Create a stave of width 400 at position 10, 40 on the canvas.
  const stave = new Stave(10, 40, 400);

  // Add a clef and time signature.
  stave.addClef('treble').addTimeSignature('4/4');

  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();

  // Define  notes
  const notes = [
    new Note({ keys: ["c/4"], duration: "q" }),
    new Note({ keys: ["d/4"], duration: "q" }),
    new Note({ keys: ["e/4"], duration: "q" }),
    new Note({ keys: ["f/4"], duration: "q" }),
  ];

  // Create a voice and add the notes
  const voice = new Vex.Flow.Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables(notes);

  // Create a formatter and format the voice
  const formatter = new Vex.Flow.Formatter();
  formatter.joinVoices([voice]).format([voice], 400);

  // Render the voice to the stave
  voice.draw(context, stave);
};
