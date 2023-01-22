Webcam.set({
    width:300,
    height:250,
    img_format:'png',
    png_quality:90,
});

Webcam=document.getElementById("webcam");
Webcam.attach("#Webcam");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"' id='capturedimg'>";
    });
}