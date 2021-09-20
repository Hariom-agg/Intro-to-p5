
function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);  
    fill("blue");
    circle(53,55,100);

    fill("white")
    rect(92,38,455,30);

    fill("blue");
    circle(590,55,100);

    fill("white")
   rect(38,100,30,300);

    fill("blue");
    circle(590,420,100);
 
    fill("white")
    rect(92,410,455,30);

    fill("blue"); 
    circle(53,420,100); 

    fill("white")
    rect(575,100,30,275);
    
   
    
   
}

function take_snapshot(){
    save('student_name.png')
}



function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}