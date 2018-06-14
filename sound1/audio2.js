function audio2(){
  background(0);  
  fill(255);
 
    
  var spectrum = fft.analyze();
 
  console.log(spectrum);
  
  stroke(255);
 
  for (var i = 0; i<spectrum.length; i++){ //loop through array
    var amp = spectrum[i];
    
    var y = map(amp, 300, 50, width, 300);    // 2= higher number = lower bands, 3 = lower number = higher bands
    fill(random(200,255),random(10,255),random(0,255));   // color
   rect(i*w, height, w, y );
   // rect(i*w, height, i*w,y);;
  }
}