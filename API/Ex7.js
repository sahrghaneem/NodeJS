// const axios = require('axios')

 //axios.get('https://api.chucknorris.io/jokes/random')
  
// .then(res => {
//     console.log(res.data.value)
//   })

// .catch(error => {
//     console.error(error)
// })

// const request = require('request')
// request({url :url ,json : true} ,(error, response)=>{
//         console.log(response.body.value)
//      })

    const got = require('got');

    (async () => {
        try {
            const response = await got('https://api.chucknorris.io/jokes/random');
            console.log((JSON.parse(response.body)).value);
        } catch (error) {
            console.log('error');
        }
    })();