function setup() {
  createCanvas(windowWidth, windowHeight);
  background(52, 168, 235);
  
  strokeWeight(20);
}

function draw(){
   if (mouseIsPressed == true){
     rect (width - mouseX, height - mouseY,  width - pmouseX,  height - pmouseY);
     
   }
  
function windowResized(){
  resizeCanvas(windowWidth, widowHeight);
}
 
}
