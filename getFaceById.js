'use strict';

const request = require('request');




const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/largefacelists/medicla_pfe/persistedfaces/fb7bf71e-fdca-4888-84e1-689c1d012778',

    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '526cdfe119264968971367d8a0b55012'
    }
};

request.get(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log('res'+ JSON.stringify(body));
  /*let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);*/
});