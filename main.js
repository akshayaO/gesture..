Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById ("camera");

Webcam.attach( '#camera' );


result = document.getElementById ("result");

Webcam.attach( '#result' );



function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    
});
}


console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hQGmJ1f4P/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}


function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + predicition_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    synth.speak(utterThis);
}


function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        predicition = results[0].label;
        speak();
    }}
        

        if(result[0].label == "amazing"){
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(result[0].label == "best"){
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if(result[0].label == "victory"){
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }