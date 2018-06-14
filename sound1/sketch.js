var amplitude;
var fft;
var prevLevels = new Array(60);
var w;
var songs = ["UFO.mp3", "splash.mp3"]

function preload(){
    song = loadSound(songs)
}

function toggleSong(){
    if(song.isPlaying()){
        song.pause();

    }else{
        song.play();
    }
}



function setup(){
    c = createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    
    button = createButton("toggle");
    button.mousePressed(toggleSong);
    button = createButton ("toggle1");
    button.mousePressed(audio2);

    

    rectMode(CENTER);
    colorMode(HSB);

    
    song.play();
    fft = new p5.FFT(0.9, 1024);
    w = width / 50;
    amplitude = new p5.Amplitude();
    amplitude.smooth(0.6);
}

   



function draw(){
    if (mouseIsPressed){
        audio2();
    }else{
        audio1();
    }
   
    
    
    
    
    
    
    
    
    /*background(20, 20);
    fill(255, 10)
    
  
    var level = amplitude.getLevel();
  
    // rectangle variables
    var spacing = 10;
    var w = width/ (prevLevels.length * spacing);
  
    var minHeight = 2;
    var roundness = 20;
  
    // add new level to end of array
    prevLevels.push(level);
  
    // remove first item in array
    prevLevels.splice(0, 1);
  
    // loop through all the previous levels
    for (var i = 0; i < prevLevels.length; i++) {
  
      var x = map(i, prevLevels.length, 0, width/2, width);
      var h = map(prevLevels[i], 0, 0.5, minHeight, height);
  
      var alphaValue = map(i, 0, prevLevels.length, 1, 250);
  
      var hueValue = map(h, minHeight, height, 200, 255);
  
      fill(hueValue, 255, 255, alphaValue);
  
      rect(x, height/2, w, h);
      rect(width - x, height/2, w, h);
    } */
}
/*function spec(){
    fill(255);
 
    fft = new p5.FFT(0.9, 64);
  var spectrum = fft.analyze();
  w = width /100;
  console.log(spectrum);
  
  stroke(255);
 noStroke();
  for (var i = 0; i<spectrum.length; i++){ //loop through array
    var amp = spectrum[i];
    
    var y = map(amp, 100, 200, width, 300);    // 2= higher number = lower bands, 3 = lower number = higher bands
    fill(random(200,255),random(10,255),random(0,255));   // color
   rect(i*w, y, w-2, height - y);
   //rect (i*w, y*i, w*i, height- y);
    
    
}
}*/
