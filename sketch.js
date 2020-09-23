// Variables for Player 1
var Player1;
    // Left Side
    var Player1_LS_anim_norm;
    var Player1_LS_anim_move_right,Player1_LS_anim_move_left;
    var Player1_LS_anim_jump,Player1_LS_anim_crouch;
    var Player1_LS_anim_punch,Player1_LS_anim_kick;
    // Right Side
    var Player1_RS_anim_norm;
    var Player1_RS_anim_move_right,Player1_RS_anim_move_left;
    var Player1_RS_anim_jump,Player1_RS_anim_crouch;
    var Player1_RS_anim_punch,Player1_RS_anim_kick;

// Variables for Player 2
var Player2;
    // Left Side
    var Player2_LS_anim_norm;
    var Player2_LS_anim_move_right,Player2_LS_anim_move_left;
    var Player2_LS_anim_jump,Player2_LS_anim_crouch;
    var Player2_LS_anim_punch,Player2_LS_anim_kick;
    // Right Side
    var Player2_RS_anim_norm;
    var Player2_RS_anim_move_right,Player2_RS_anim_move_left;
    var Player2_RS_anim_jump,Player2_RS_anim_crouch;
    var Player2_RS_anim_punch,Player2_RS_anim_kick;

// Buttons for playing in mobile
var Lbtn,Rbtn,UPbtn,DWbtn;
var UImg,RImg,LImg,DImg;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;

function preload() {

  // Background Image

  BG = loadImage("arena.png");

  // Player 1 Images for Left Side

  Player1_LS_anim_norm = loadAnimation("Images/Player1/Left/Norm/0.png","Images/Player1/Left/Norm/1.png",
  "Images/Player1/Left/Norm/2.png","Images/Player1/Left/Norm/3.png","Images/Player1/Left/Norm/4.png",
  "Images/Player1/Left/Norm/5.png","Images/Player1/Left/Norm/6.png","Images/Player1/Left/Norm/7.png",
  "Images/Player1/Left/Norm/8.png","Images/Player1/Left/Norm/9.png");

  Player1_LS_anim_move_right = loadAnimation("Images/Player1/Left/Move_right/0.png",
  "Images/Player1/Left/Move_right/1.png","Images/Player1/Left/Move_right/2.png",
  "Images/Player1/Left/Move_right/3.png","Images/Player1/Left/Move_right/4.png",
  "Images/Player1/Left/Move_right/5.png","Images/Player1/Left/Move_right/6.png",
  "Images/Player1/Left/Move_right/7.png","Images/Player1/Left/Move_right/8.png");

  Player1_LS_anim_move_left = loadAnimation("Images/Player1/Left/Move_left/0.png",
  "Images/Player1/Left/Move_left/1.png","Images/Player1/Left/Move_left/2.png",
  "Images/Player1/Left/Move_left/3.png","Images/Player1/Left/Move_left/4.png",
  "Images/Player1/Left/Move_left/5.png","Images/Player1/Left/Move_left/6.png",
  "Images/Player1/Left/Move_left/7.png","Images/Player1/Left/Move_left/8.png");

  Player1_LS_anim_jump = loadAnimation("Images/Player1/Left/Jump/0.png",
  "Images/Player1/Left/Jump/1.png","Images/Player1/Left/Jump/2.png","Images/Player1/Left/Jump/3.png",
  "Images/Player1/Left/Jump/4.png");

  Player1_LS_anim_punch = loadAnimation("Images/Player1/Left/Punch/0.png","Images/Player1/Left/Punch/1.png",
  "Images/Player1/Left/Punch/2.png","Images/Player1/Left/Punch/3.png","Images/Player1/Left/Punch/4.png");

  Player1_LS_anim_kick = loadAnimation("Images/Player1/Left/Kick/0.png","Images/Player1/Left/Kick/1.png",
  "Images/Player1/Left/Kick/2.png","Images/Player1/Left/Kick/3.png","Images/Player1/Left/Kick/4.png",
  "Images/Player1/Left/Kick/5.png");

  Player1_LS_anim_crouch = loadAnimation("Images/Player1/Left/Crouch/0.png","Images/Player1/Left/Crouch/1.png",
  "Images/Player1/Left/Crouch/2.png");

  Player1_LS_crouch_still = loadAnimation("Images/Player1/Left/Crouch/2.png");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("Images/Player1/Right/Norm/0.png","Images/Player1/Right/Norm/1.png",
  "Images/Player1/Right/Norm/2.png","Images/Player1/Right/Norm/3.png","Images/Player1/Right/Norm/4.png",
  "Images/Player1/Right/Norm/5.png","Images/Player1/Right/Norm/6.png","Images/Player1/Right/Norm/7.png",
  "Images/Player1/Right/Norm/8.png");

  Player1_RS_anim_move_right = loadAnimation("Images/Player1/Right/Move_right/0.png",
  "Images/Player1/Right/Move_right/1.png","Images/Player1/Right/Move_right/2.png",
  "Images/Player1/Right/Move_right/3.png","Images/Player1/Right/Move_right/4.png",
  "Images/Player1/Right/Move_right/5.png","Images/Player1/Right/Move_right/6.png",
  "Images/Player1/Right/Move_right/7.png","Images/Player1/Right/Move_right/8.png");

  Player1_RS_anim_move_left = loadAnimation("Images/Player1/Right/Move_left/0.png",
  "Images/Player1/Right/Move_left/1.png","Images/Player1/Right/Move_left/2.png",
  "Images/Player1/Right/Move_left/2.png","Images/Player1/Right/Move_left/4.png",
  "Images/Player1/Right/Move_left/5.png","Images/Player1/Right/Move_left/6.png",
  "Images/Player1/Right/Move_left/7.png","Images/Player1/Right/Move_left/8.png");

  Player1_RS_anim_jump = loadAnimation("Images/Player1/Right/Jump/0.png",
  "Images/Player1/Right/Jump/1.png","Images/Player1/Right/Jump/2.png","Images/Player1/Right/Jump/3.png",
  "Images/Player1/Right/Jump/4.png");

  Player1_RS_anim_punch = loadAnimation("Images/Player1/Right/Punch/0.png","Images/Player1/Right/Punch/1.png",
  "Images/Player1/Right/Punch/2.png","Images/Player1/Right/Punch/3.png","Images/Player1/Right/Punch/4.png");

  Player1_RS_anim_kick = loadAnimation("Images/Player1/Right/Kick/0.png","Images/Player1/Right/Kick/1.png",
  "Images/Player1/Right/Kick/2.png","Images/Player1/Right/Kick/3.png","Images/Player1/Right/Kick/4.png",
  "Images/Player1/Right/Kick/5.png");

  Player1_RS_anim_crouch = loadAnimation("Images/Player1/Right/Crouch/0.png","Images/Player1/Right/Crouch/1.png",
  "Images/Player1/Right/Crouch/2.png");

  Player1_RS_crouch_still = loadAnimation("Images/Player1/Right/Crouch/2.png");

  // Player 2 Images for Left Side

  Player2_LS_anim_norm = loadAnimation("Images/Player2/Left/Norm/0.png","Images/Player2/Left/Norm/1.png",
  "Images/Player2/Left/Norm/2.png","Images/Player2/Left/Norm/3.png","Images/Player2/Left/Norm/4.png",
  "Images/Player2/Left/Norm/5.png","Images/Player2/Left/Norm/6.png","Images/Player2/Left/Norm/7.png",
  "Images/Player2/Left/Norm/8.png");

  Player2_LS_anim_move_right = loadAnimation("Images/Player2/Left/Move_right/0.png",
  "Images/Player2/Left/Move_right/1.png","Images/Player2/Left/Move_right/2.png",
  "Images/Player2/Left/Move_right/3.png","Images/Player2/Left/Move_right/4.png",
  "Images/Player2/Left/Move_right/5.png","Images/Player2/Left/Move_right/6.png",
  "Images/Player2/Left/Move_right/7.png","Images/Player2/Left/Move_right/8.png");

  Player2_LS_anim_move_left = loadAnimation("Images/Player2/Left/Move_left/0.png",
  "Images/Player2/Left/Move_left/1.png","Images/Player2/Left/Move_left/2.png",
  "Images/Player2/Left/Move_left/3.png","Images/Player2/Left/Move_left/4.png",
  "Images/Player2/Left/Move_left/5.png","Images/Player2/Left/Move_left/6.png",
  "Images/Player2/Left/Move_left/7.png","Images/Player2/Left/Move_left/8.png");

  Player2_LS_anim_jump = loadAnimation("Images/Player2/Left/Jump/0.png",
  "Images/Player2/Left/Jump/1.png","Images/Player2/Left/Jump/2.png","Images/Player2/Left/Jump/3.png",
  "Images/Player2/Left/Jump/4.png");

  Player2_LS_anim_punch = loadAnimation("Images/Player2/Left/Punch/0.png","Images/Player2/Left/Punch/1.png",
  "Images/Player2/Left/Punch/2.png","Images/Player2/Left/Punch/3.png","Images/Player2/Left/Punch/4.png");

  Player2_LS_anim_kick = loadAnimation("Images/Player2/Left/Kick/0.png","Images/Player2/Left/Kick/1.png",
  "Images/Player2/Left/Kick/2.png","Images/Player2/Left/Kick/3.png","Images/Player2/Left/Kick/4.png",
  "Images/Player2/Left/Kick/5.png");

  Player2_LS_anim_crouch = loadAnimation("Images/Player2/Left/Crouch/0.png","Images/Player2/Left/Crouch/1.png",
  "Images/Player2/Left/Crouch/2.png");

  Player2_LS_crouch_still = loadAnimation("Images/Player2/Left/Crouch/2.png");

  // Player 2 Images for Right Side

  Player2_RS_anim_norm = loadAnimation("Images/Player2/Right/Norm/0.png","Images/Player2/Right/Norm/1.png",
  "Images/Player2/Right/Norm/2.png","Images/Player2/Right/Norm/3.png","Images/Player2/Right/Norm/4.png",
  "Images/Player2/Right/Norm/5.png","Images/Player2/Right/Norm/6.png","Images/Player2/Right/Norm/7.png",
  "Images/Player2/Right/Norm/8.png");

  Player2_RS_anim_move_right = loadAnimation("Images/Player2/Right/Move_right/0.png",
  "Images/Player2/Right/Move_right/1.png","Images/Player2/Right/Move_right/2.png",
  "Images/Player2/Right/Move_right/3.png","Images/Player2/Right/Move_right/4.png",
  "Images/Player2/Right/Move_right/5.png","Images/Player2/Right/Move_right/6.png",
  "Images/Player2/Right/Move_right/7.png","Images/Player2/Right/Move_right/8.png");

  Player2_RS_anim_move_left = loadAnimation("Images/Player2/Right/Move_left/0.png",
  "Images/Player2/Right/Move_left/1.png","Images/Player2/Right/Move_left/2.png",
  "Images/Player2/Right/Move_left/2.png","Images/Player2/Right/Move_left/4.png",
  "Images/Player2/Right/Move_left/5.png","Images/Player2/Right/Move_left/6.png",
  "Images/Player2/Right/Move_left/7.png","Images/Player2/Right/Move_left/8.png");

  Player2_RS_anim_jump = loadAnimation("Images/Player2/Right/Jump/0.png",
  "Images/Player2/Right/Jump/1.png","Images/Player2/Right/Jump/2.png","Images/Player2/Right/Jump/3.png",
  "Images/Player2/Right/Jump/4.png");

  Player2_RS_anim_punch = loadAnimation("Images/Player2/Right/Punch/0.png","Images/Player2/Right/Punch/1.png",
  "Images/Player2/Right/Punch/2.png","Images/Player2/Right/Punch/3.png","Images/Player2/Right/Punch/4.png");

  Player2_RS_anim_kick = loadAnimation("Images/Player2/Right/Kick/0.png","Images/Player2/Right/Kick/1.png",
  "Images/Player2/Right/Kick/2.png","Images/Player2/Right/Kick/3.png","Images/Player2/Right/Kick/4.png",
  "Images/Player2/Right/Kick/5.png");

  Player2_RS_anim_crouch = loadAnimation("Images/Player2/Right/Crouch/0.png","Images/Player2/Right/Crouch/1.png",
  "Images/Player2/Right/Crouch/2.png");

  Player2_RS_crouch_still = loadAnimation("Images/Player2/Right/Crouch/2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(50);

  health1 = 20;
  health2 = 20;

  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth,15);
  invisibleGround.visible = false;

  // Player 1
  Player1 = createSprite(400, windowHeight-40, 50, 50);
      // Left Side
      Player1.addAnimation("Normal_LS_1",Player1_LS_anim_norm);
      Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
      Player1.addAnimation("left_LS_1",Player1_LS_anim_move_left);
      Player1.addAnimation("jump_LS_1",Player1_LS_anim_jump);
      Player1.addAnimation("punch_LS_1",Player1_LS_anim_punch);
      Player1.addAnimation("kick_LS_1",Player1_LS_anim_kick);
      Player1.addAnimation("crouch_LS_1",Player1_LS_anim_crouch);
      Player1.addAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      // Right Side
      Player1.addAnimation("Normal_RS_1",Player1_RS_anim_norm);
      Player1.addAnimation("right_RS_1",Player1_RS_anim_move_right);
      Player1.addAnimation("left_RS_1",Player1_RS_anim_move_left);
      Player1.addAnimation("jump_RS_1",Player1_RS_anim_jump);
      Player1.addAnimation("punch_RS_1",Player1_RS_anim_punch);
      Player1.addAnimation("kick_RS_1",Player1_RS_anim_kick);
      Player1.addAnimation("crouch_RS_1",Player1_RS_anim_crouch);
      Player1.addAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
  Player1.scale = 2;

  // Player 2
  Player2 = createSprite(windowWidth-400, windowHeight-40, 50, 50);
      // Left Side
      Player2.addAnimation("Normal_LS_2",Player2_LS_anim_norm);
      Player2.addAnimation("right_LS_2",Player2_LS_anim_move_right);
      Player2.addAnimation("left_LS_2",Player2_LS_anim_move_left);
      Player2.addAnimation("jump_LS_2",Player2_LS_anim_jump);
      Player2.addAnimation("punch_LS_2",Player2_LS_anim_punch);
      Player2.addAnimation("kick_LS_2",Player2_LS_anim_kick);
      Player2.addAnimation("crouch_LS_2",Player2_LS_anim_crouch);
      Player2.addAnimation("crouch_still_LS_2",Player2_LS_crouch_still);
      // Right Side
      Player2.addAnimation("Normal_RS_2",Player2_RS_anim_norm);
      Player2.addAnimation("right_RS_2",Player2_RS_anim_move_right);
      Player2.addAnimation("left_RS_2",Player2_RS_anim_move_left);
      Player2.addAnimation("jump_RS_2",Player2_RS_anim_jump);
      Player2.addAnimation("punch_RS_2",Player2_RS_anim_punch);
      Player2.addAnimation("kick_RS_2",Player2_RS_anim_kick);
      Player2.addAnimation("crouch_RS_2",Player2_RS_anim_crouch);
      Player2.addAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
  Player2.scale = 2;

  // Buttons 
  Lbtn = createButton('');
  Lbtn.position(50,windowHeight-150);
  Lbtn.style('width','60px');
  Lbtn.style('height','60px');
  Lbtn.style('background','orangered');
  Lbtn.style('border-radius','20px');
  Lbtn.style('color','yellow');
  Lbtn.style('font-size','20px');

  Rbtn = createButton('');
  Rbtn.position(150,windowHeight-150);
  Rbtn.style('width','60px');
  Rbtn.style('height','60px');
  Rbtn.style('background','orangered');
  Rbtn.style('border-radius','20px');
  Rbtn.style('color','yellow');
  Rbtn.style('font-size','20px');
  
  UPbtn = createButton('');
  UPbtn.position(100,windowHeight-200);
  UPbtn.style('width','60px');
  UPbtn.style('height','60px');
  UPbtn.style('background','orangered');
  UPbtn.style('border-radius','20px');
  UPbtn.style('color','yellow');
  UPbtn.style('font-size','20px');

  DWbtn = createButton('');
  DWbtn.position(100,windowHeight-100);
  DWbtn.style('width','60px');
  DWbtn.style('height','60px');
  DWbtn.style('background','orangered');
  DWbtn.style('border-radius','20px');
  DWbtn.style('color','yellow');
  DWbtn.style('font-size','20px');

  // check box
  select = createSelect();
  select.position(50, 50);
  select.style('width', '125px');
  select.style('height', '40px');
  select.option('ON');
  select.option('OFF');
  select.changed(() => {
    let val = select.value();
    if(val === "ON") {
      Lbtn.show();
      Rbtn.show();
      UPbtn.show();
      DWbtn.show();
    }else {
      Lbtn.hide();
      Rbtn.hide();
      UPbtn.hide();
      DWbtn.hide();
    }
  });
}

function draw() {
  background(BG);  

  // Gravity
  Player1.velocityY += 0.8;
  Player2.velocityY += 0.8;
  
  /* -------------------------------------------------------------------- */

  // Function for right movement of player 1
  if(keyDown("D")){
    Player1.x += 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("right_LS_1",Player1_LS_anim_move_right);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("right_RS_1",Player1_RS_anim_move_right);
    }
  }else {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("Normal_LS_1",Player1_LS_anim_norm);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("Normal_RS_1",Player1_RS_anim_norm);
    }
  }

  // Function for left movement of player 1
  if(keyDown("A")){
    Player1.x -= 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("left_LS_1",Player1_LS_anim_move_left);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("left_RS_1",Player1_RS_anim_move_left);
    }
  }

  // Function for jumping of player 1
  if(keyDown("W") && Player1.y > invisibleGround.y-150) {
    Player1.velocityY = -15;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("jump_LS_1",Player1_LS_anim_jump);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("jump_RS_1",Player1_RS_anim_jump);
    }
  }

  // Function for crouching of Player 1
  if(keyDown("S") && Player1.y > invisibleGround.y-140) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("crouch_LS_1",Player1_LS_anim_crouch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("crouch_RS_1",Player1_RS_anim_crouch);
    }
    if(Player1.y>invisibleGround.y-99) {
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
      }
    }
  }

  // Function for punching of player 1
  if(keyDown("R")) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("punch_LS_1",Player1_LS_anim_punch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("punch_RS_1",Player1_RS_anim_punch);
    }
  }

  // Function for kicking of player 1
  if(keyDown("E")) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("kick_LS_1",Player1_LS_anim_kick);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("kick_RS_1",Player1_RS_anim_kick);
    }
    if(Player1.isTouching(Player2)) {
      health1 -= 0.5;
    } 
  }

/* ---------------------------------------------------------------------- */

  // Function for right movement of player 2
  if(keyDown(RIGHT_ARROW)){
    Player2.x += 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("right_RS_2",Player2_RS_anim_move_right);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("right_LS_2",Player2_LS_anim_move_right);
    }
  }else {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("Normal_RS_2",Player2_RS_anim_norm);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("Normal_LS_2",Player2_LS_anim_norm);
    }
  }

  // Function for left movement of player 2
  if(keyDown(LEFT_ARROW)){
    Player2.x -= 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("left_RS_2",Player2_RS_anim_move_left);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("left_LS_2",Player2_LS_anim_move_left);
    }
  }

  // Function for jumping of Player 2 
  if(keyDown(UP_ARROW) && Player2.y > invisibleGround.y-150) {
    Player2.velocityY = -15;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("jump_RS_2",Player2_RS_anim_jump);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("jump_LS_2",Player2_LS_anim_jump);
    }
  }

  // Function for crouching of Player 2 
  if(keyIsDown(DOWN_ARROW) && Player2.y > invisibleGround.y-140) {  
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("crouch_RS_2",Player2_RS_anim_crouch);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("crouch_LS_2",Player2_LS_anim_crouch);
    }
    if(Player2.y>invisibleGround.y-99) {
      if(Player2.x>Player1.x) {
        Player2.changeAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
      }else if(Player2.x<Player1.x) {
        Player2.changeAnimation("crouch_still_LS_2",Player2_RS_crouch_still);
      }
    }
  }

  // Function for punching of Player 2 
  if(keyDown("P")) {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("punch_RS_2",Player2_RS_anim_punch);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("punch_LS_2",Player2_LS_anim_punch);
    }
  }

  // Function for kicking of Player 2 
  if(keyDown("O")) {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("kick_RS_2",Player2_RS_anim_kick);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("kick_LS_2",Player2_LS_anim_kick);
    }
  }

  /* -------------------------------------------------------------------------------- */

  // collision
  Player1.collide(invisibleGround);
  Player2.collide(invisibleGround);
  drawSprites();
}