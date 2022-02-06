var runner,path;
var runnerImg,pathImg;
var bomb,bombImg;

function preload(){
  
//imagens pré-carregadas
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
}


function setup(){
  createCanvas(400, 600);
 
//crie sprite aqui

//velocidade e tamanho da estrada
  path = createSprite(180,600); 
  path.addImage(pathImg);
  path.velocityY = -4;
  path.scale= 1;
  
//botar animação do corredor
  runner = createSprite(180,100,30,30);
  runner.addAnimation("movingRunner",runnerImg);
  runner.scale = -0.07;

//tamanho e velocidade da bomba
  bomb = createSprite(90,450);
  bomb.addImage(bombImg);
  bomb.scale = -0.09;
  bomb.velocityY = -5;
}

function draw() {
  background(0);

  path.velocityY = -6;

//resetar animação da estrada
  if(path.y < 0){
    path.y = path.width/1;
}
//resetar animação da bomba
  if(bomb.y < 0){
  bomb.y = bomb.width/1;
}

//movimentar o corredor
  if (keyDown(LEFT_ARROW)) {
  runner.x = runner.x + -3;
}
  if (keyDown(RIGHT_ARROW)) {
  runner.x = runner.x + 3;
}

  drawSprites();
}

 