'use strict';

const request = require('request');





const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/largefacelists/medicla_pfe/persistedFaces?userData=idmongodb',
    body: JSON.stringify({
        "url": "https://avatars3.githubusercontent.com/u/13053759?s=460&v=4"
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





