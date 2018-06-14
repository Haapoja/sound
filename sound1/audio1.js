function audio1 (){
    background(20, 20);
    fill(255, 10)
    
  
    var level = amplitude.getLevel();
  
    // rectangle variables
    var spacing = 5;
    var w1 = width/ (prevLevels.length * spacing);
  
    var minHeight = 2;
    var roundness = 200;
  
    // add new level to end of array
    prevLevels.push(level);
  
    // remove first item in array
    prevLevels.splice(0, 1);
  
    // loop through all the previous levels
    for (var i = 0; i < prevLevels.length; i++) {
  
      var x = map(i, prevLevels.length, 100, width/2, width);
      var h = map(prevLevels[i], 0, 0.5, minHeight, height);
  
      var alphaValue = map(i, 0, prevLevels.length, 1, 350);
  
      var hueValue = map(h, minHeight, height, 100, 255);
  
      fill(hueValue, 155, 255, alphaValue);
  
      rect(x, height/2, w1, h);
      rect(width - x, height/2, w1, h);
    }
}