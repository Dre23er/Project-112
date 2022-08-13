// https://teachablemachine.withgoogle.com/models/x7seZ9YGa/

prediction1 = "";
prediction2 = ""; 


Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach("#camera");
    
    function take_snapshot(){
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
        
    });
        }
    
       console.log("ml5 version:", ml5.version)
    
       classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x7seZ9YGa/model.json",modelLoaded);
    
       function modelLoaded() {
        console.log("modelLoaded")
       }
    
       function speak() {
       snyth = window.speechSynthesis;
       speak_data_1 = "My first prediction is " + prediction1;
       speak_data_2 = "My second prediction is " + prediction2;
       utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
       utterThis.rate = 0.75;
       synth.speak(utterThis);
       }

       function take_snapshot(){
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
        
    });
        }
        
       function check(){
        console.log("modelLoaded")
        classifier.classify(img, gotResult);
       }

       function gotResult(error,results){
        if (error) {
            console.error(error);
        } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
    if (results[0].label == "Thumbs Up") {
        document.getElementById("update_emoji").innerHTML = "&#128513;"
    }
    if (results[0].label == "Thumbs Down") {
        document.getElementById("update_emoji").innerHTML = "&#128542;"
    }
    if (results[0].label == "Peace Sign") {
        document.getElementById("update_emoji").innerHTML = "&#128534;"
    }
    if (results[1].label == "Thumbs Up") {
        document.getElementById("update_emoji2").innerHTML = "&#128513;"
    }
    if (results[1].label == "Thumbs Down") {
        document.getElementById("update_emoji2").innerHTML = "&#128542;"
    }
    if (results[1].label == "Peace Sign") {
        document.getElementById("update_emoji2").innerHTML = "&#128534;"
    }
        }
       }
    
       
    