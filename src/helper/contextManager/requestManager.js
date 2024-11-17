const { request } = require('playwright');


const requestContextOptions = {
    baseURL: 'https://dog.ceo/api/breeds/image/'
  };

async function invokeRequest(){
    const context = await request.newContext(requestContextOptions);
    return await context
}

  module.exports={invokeRequest}