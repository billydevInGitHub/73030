let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "The man likes to keep his word",
        code: "aManKeepsHisWord"
      });
    }, 2 * 1000);
  });
  console.log(promise2.then(()=>{console.log("afsd")}));