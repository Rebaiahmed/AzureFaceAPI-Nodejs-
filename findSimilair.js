'use strict';

const request = require('request');




const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/findsimilars',
    body: JSON.stringify({
        "faceId": "7e216e75-b1c5-4a3d-86af-f9c01e5a604c",
        "largeFaceListId": "medicla_pfe",
        "maxNumOfCandidatesReturned": 10,
        "mode": "matchFace"
    
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