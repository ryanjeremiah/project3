function setup() {
  createCanvas(600, 600);
  background(220);
  
  strokeWeight(15);
  
}

function draw() {
  if(mouseIsPressed == true){
stroke(map(mouseX, 0,600,0, 255, true))  
    line( width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
function keyType(){
  console.log('key a{key} is being type')
  console.log('key a{key} is being type')
  if(key === 'a'){
    saveCanvas('fileName', 'png');
  }
  
  return false
}

}
