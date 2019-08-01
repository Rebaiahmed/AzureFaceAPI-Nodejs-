'use strict';

const request = require('request');




const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/findsimilars',
    body: JSON.stringify({
        "largePersonGroupId": "healthchain",
        "faceIds": [
            "3f1a2403-ce5a-4f8d-be29-f01c92a4f827",
        ],
        "maxNumOfCandidatesReturned": 1,
        "confidenceThreshold": 0.5
    
    
    }),

    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '526cdfe119264968971367d8a0b55012'
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log('res'+ JSON.stringify(body));
  /*let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);*/
});