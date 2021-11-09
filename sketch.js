var bike1,bike2,bike3,bike4;
var track;
var game,form,player;
function preload(){

track=loadImage("background.png");



}
function setup(){
createCanvas(1200,800)
database=firebase.database();
game=new Game();
game.start();




}
function draw(){
backgroung(track);


}