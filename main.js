canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_width=100
rover_height=90

background_image="mars.jpg"
rover_image="rover.png"
rover_x=10
rover_y=10

function add()
{
    Background_Image_tag= new Image();
    Background_Image_tag.onload =uploadbackground;
    Background_Image_tag.src= background_image;

    rover_Image_tag= new Image();
    rover_Image_tag.onload =uploadrover;
    rover_Image_tag.src= rover_image;
}

function uploadbackground()
{
    ctx.drawImage(Background_Image_tag,0,0,canvas.width,canvas.height)
}

function uploadrover()
{
    ctx.drawImage(rover_Image_tag,rover_x,rover_y,rover_height,rover_width)}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keycode;
     
    if(keyPressed=='38')
    {
        up();
        console.log("up")
    }

    if(keyPressed=='40')
    {
        down();
        console.log("down")
    }

    if(keyPressed=='37')
    {
        left();
    }

    if(keyPressed=='39')
    {
        right();
    }
}

function up()
{
    if(rover_y>=0)
    {
rover_y =rover_y-10
console.log(rover_x,rover_y)
uploadbackground();
uploadrover();
    }
}

function down()
{
    if(rover_y<=500)
    {
rover_y =rover_y+10
console.log(rover_x,rover_y)
uploadbackground();
uploadrover();
    }
}

function left()
{
    if(rover_x>=0)
    {
rover_x =rover_x-10
uploadbackground();
uploadrover();
    }
}

function right()
{
    if(rover_x<=700)
    {
rover_x =rover_x+10
uploadbackground();
uploadrover();
    }
}