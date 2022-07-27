
function preload() {

 
function setup() {
    canvas=createCanvas(500,350);
    canvas.center();
}
function draw() {
    image(video,0,0,500,350);
}
function start() {
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status - detecting objects"
}
function modelLoaded() {
    console.log("Model is been emphisized");
   
}
