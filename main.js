canvas=new fabric.Canvas("myCanvas");
block_image_heigth=30;
block_image_width=30;
player_object="";
player_x=0 ;
player_y=0;
block_image_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function block_image_update(getImage){
    fabric.Image.fromURL(getImage,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_heigth);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed = "84") {
        block_image_update("trunk.jpg");
    }
    if (keyPressed = "68") {
        block_image_update("dark_green.png");
    }
    if (keyPressed = "76") {
        block_image_update("light_green.png");
    }
    if (keyPressed = "71") {
        block_image_update("ground.png");
    }
    if (keyPressed = "87") {
        block_image_update("wall.jpg");
    }
    if (keyPressed = "89") {
        block_image_update("yellow_wall.png");
    }
    if (keyPressed = "82") {
        block_image_update("roof.jpg");
    }
    if (keyPressed = "67") {
        block_image_update("cloud.jpg");
    }
    if (keyPressed = "85") {
        block_image_update("unique.png");
    }
    if (keyPressed = "77"&& e.shiftKey==true) {
         block_image_width-=10 ; block_image_heigth-=10;
    }
    document.getElementById("width").innerHTML= block_image_width;
    document.getElementById("height").innerHTML= block_image_heigth;
    if (keyPressed = "80"&& e.shiftKey==true) {
        block_image_width+=10 ; block_image_heigth+=10;
    }
    document.getElementById("width").innerHTML= block_image_width;
    document.getElementById("height").innerHTML= block_image_heigth;
    
}