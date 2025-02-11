const getTodos = (resource, callback) => {
    
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("başarılı cevap alamadım", undefined);
        }
    });

    request.open("GET", resource);
    request.send();
};

// // Doğru dosya yolu olduğundan emin olun
// getTodos("example/can.json", (err, data) => {
  
//         console.log(data);
//         getTodos("example/osman.json", (err, data) => {
  
//             console.log(data);
//             getTodos("example/tuba.json", (err, data) => {
  
//                 console.log(data);
            
//         });
        
//     });
    
// });

const getIt = () => {
    return new Promise((resolve,reject) => {
        resolve("Basarili Data");
        // reject("Basarisiz Data");
    })
}

// getIt().then(
// (data) =>{
//     console.log("basarili ", data);
// }, err =>{
//     console.log("basarisiz ", err);

// });
getIt().then(
    (data) =>{
        console.log("basarili ", data);
    }).catch(err =>{
        console.log("basarili ", data);
    })