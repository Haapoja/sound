

var song;
var fft;
var button;
var w;
var VolHistory = [];

function toggleSong(){
  if (song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

function preload (){
  song = loadSound('splash.mp3');
}

function setup(){
  createCanvas(1400,600);
  colorMode(HSB, 200, 100);
  song.play();
  angleMode(DEGREES);
  button = createButton("toggle");
  button.mousePressed(toggleSong);
  fft = new p5.FFT(0.9, 64);
 w = width / 64;
 if(fft>100){
   colorMode(HSB,20,20,20)
 }
}


function draw(){
  background(0);

  var spectrum = fft.analyze();
  console.log(spectrum);
  
 // stroke(255);
 noStroke();
  for (var i = 0; i<spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 100, 255, height, 0);
    fill(i, 250,255);
    rect (i*w, y, w-2, height - y);
    //rect (i*w, y*i, w*i, height- y);
    
    
  }

 
  stroke(255); 
  






}