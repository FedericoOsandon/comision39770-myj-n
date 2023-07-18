(function peticion(){
    fetch('http://localhost:8080/api/products',
    // {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({

    //     })
    // }
    )
    .then(resp => resp.json())
    .then(resp => console.log(resp.payload))
})()