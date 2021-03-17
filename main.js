function preload(){

}

function setup(){
    tintColor = ""

    canvas = createCanvas(650,500);
    canvas.position(285,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,650,500);

    tint(tintColor);
}

function take_snapshot(){
    save("IMAGE.png");
}

function addFilter(){
    tintColor = document.getElementById("filterColor").value;
}