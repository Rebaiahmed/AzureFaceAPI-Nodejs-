'use strict';

const request = require('request');



const options = {
    url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/largefacelists/medicla_pfe/persistedfaces',

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

  console.log('res'+ body);
  /*let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);*/
});




/*
res[{"persistedFaceId":"240aa483-aaed-4737-bd2c-120e7fcfb3da","userData":"5cf12f6a8dfd8d69b02951e5"},{"persistedFaceId":"36a93235-8567-41d4-9a0e-1ef6dff66ab6","userData":"idmongodb"},{"persistedFaceId":"3d52ffe4-3b48-4ee3-8334-0b21de48ea0f","userData":"req.data.id"},{"persistedFaceId":"75d1b111-2690-46c9-a7fa-623f987b1cba","userData":"ahmed"},{"persistedFaceId":"7dd6fdc4-81b3-4fc3-b36f-8c3a8e64bade","userData":"5d01128e4c54c775a4c084d4"},{"persistedFaceId":"d528371e-cf68-4c08-b036-52d5cf64ae44","userData":"5d01128e4c54c775a4c084d4"},{"persistedFaceId":"d9f194e2-730f-4721-b74d-c911f84f4f2f","userData":"idmongodb"},{"persistedFaceId":"fb7bf71e-fdca-4888-84e1-689c1d012778","userData":"ahmed"}]
*/







const options2 = {
  url: 'https://francecentral.api.cognitive.microsoft.com/face/v1.0/largefacelists/medicla_pfe/persistedfaces/7dd6fdc4-81b3-4fc3-b36f-8c3a8e64bade',

  headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '526cdfe119264968971367d8a0b55012'
  }
};



request.delete(options2, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log('res'+ body);
  /*let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);*/
});