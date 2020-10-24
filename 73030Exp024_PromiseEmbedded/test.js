var embeddedPromise = new Promise(function(resolve, reject) {
   let returnOk=true;
    if (returnOk) {
      resolve({
        brand: "iphone",
        model: "6s",
        content:{
            video:"new video",
            audio:"new audio",
            address:{
                street:"123 street",
                postcode: "123456"
            }
        }
      });
    } else {
      reject("We donot have enough savings. Let us save some more money.");
    }
  });



  embeddedPromise.then(result=>{
      console.log("show first promise return:"+result.content);
      return result.content; 
  }).then(result=>{
      console.log("show second promise return:"+result.video);
      return result.address; 
  }).then( result=>{
      console.log("show third promise return:"+result.street);
      return result.postcode; 
  }); 


  embeddedPromise.then(result=>{
    return  result.content().then(result=>{
           console.log("within embedded promise result:"+result)
          return result.address;
      })
}).then(result=>{
    console.log("show second promise return:"+result.street);
    return result.street; 
}).then( result=>{
    console.log("show third promise return:"+result);
}).catch(error=>{
    console.log("error handling");
})

  