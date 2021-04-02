var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var car1_width=120;
var car1_height=70;
var car1_image="car1.png";
var car1_x=10;
var car1_y=10;
var car2_width=120;
var car2_height=70;
var car2_image="download.jpg";
var car2_x=10;
var car2_y=10;

function add(){
var car1_imgTag= new Image();
car1_imgTag.onload = uploadcar1;
car1_imgTag.src=car1_image;
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car2_width,car1_height)
    
    
    
    
    
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(){
        var keypressed=e.keyCode;
if(keypressed=='38'){
    car1_up();


}
if(keypressed=='40'){
    car1_down();


}
if(keypressed=='37'){
    car1_left();


}
if(keypressed=='39'){
    car1_right();


}




    }
    function car1_up(){
    car1_y=car1_y-10;
    uploadcar1();
    }
    function car1_down(){
        car1_y=car1_y+10;
        uploadcar1();
        }
        function car1_left(){
            car1_x=car1_x-10;
            uploadcar1();
            }
            function car1_right(){
                car1_x=car1_x+10;
                uploadcar1();
                }