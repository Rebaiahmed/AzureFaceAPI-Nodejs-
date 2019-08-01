'use strict';

const request = require('request');



const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/largefacelists/medicla_pfe',
    //qs: params,
    body: JSON.stringify({

        "name": "medical_pfe",
        "userData": "User-provided data attached to the large face list.",
        "recognitionModel": "recognition_01"
    
}),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '526cdfe119264968971367d8a0b55012'
    }
};

request.put(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log('res'+ body);
  /*let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);*/
});