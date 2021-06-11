function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z-TxQQ7T-/model.json',modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    } else {
        console.log(result);
        document.getElementById('person').innerHTML = result[0].label;
        document.getElementById('accuracy').innerHTML = result[0].confidence.toFixed(3);
    }
}

function modelLoaded(){
    console.log('model loaded :D');
}

function personButtonInfo(){
    window.alert('Arent things just easier when you ask? This button tells which person the webcam can see!');
}

function accuracyButtonInfo(){
    window.alert('Beep skaboop beep boop. The accuracy is shown here!');
}

function secretClick(){
    var audio = new Audio('wonderful-idea.ogg');
    audio.play();
    window.alert('Go to f11 to see the full website background.');
}