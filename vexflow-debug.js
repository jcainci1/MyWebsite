VF = Vex.Flow;
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
renderer.resize(200, 200);
var context = renderer.getContext();
// Create a 4/4 treble stave, and add two parallel voices
system.addStave({
  voices: [
    // Top voice has 4 quarter notes with stems up
    score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
   
    // Bottom voice has two half notes, with the stem down
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4');

// Draw it!
vf.draw();

