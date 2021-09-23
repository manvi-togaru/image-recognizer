Webcam.attach('#camera');
camera=document.getElementById("camera")
Webcam.set({
width:350,
height:350,
image_format:'png',
png_qaulity:90,
})
function takesnap()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieimage">'
})
}
console.log("ml5version",ml5.version)
classifier=
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3tnd5xvTy/model.json",modelLoaded);
function modelLoaded()
{
console.log("modelLoaded")
}
function check()
{
img=document.getElementById("selfieimage")
classifier.classify(img,gotresult)
}
function gotresult(error,results)
{
if (error) {
    console.log("error")
}
else{
    console.log(results)
    document.getElementById("ron").innerHTML=results[0].label
    document.getElementById("roa").innerHTML=results[0].confidence.toFixed(3)
}   
}