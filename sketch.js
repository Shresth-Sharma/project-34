const Engine = Matther.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint
const Body = Matter.Body
var world,engine;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0);

}

