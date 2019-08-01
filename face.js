var request = require('request');
var options = {
    method: 'POST',
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_01&returnRecognitionModel=false',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '526cdfe119264968971367d8a0b55012'
    },
    //7ot lien taswira houni :p
    body: JSON.stringify({
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Tom_Hanks_face.jpg"
    })
};

function callback(error, response, body) {
    console.log(response.body);
}

request(options, callback);