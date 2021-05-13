fetch('https://no-such-server')
.catch( (e) => {
      console.log("Попалась....");
      console.log(e);
  });

new Promise((resolve,reject) =>{
    reject("error")
}).catch((e) => {
    console.log("error catched");
    console.log(e);
})