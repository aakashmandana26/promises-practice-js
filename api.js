const axios = require('axios')


// Using then catch 

console.log("abhi print hua1")

axios
.get("https://www.boredapi.com/api/activity/")
.then((response)=>{console.log(`You could ${response.data.activity}`)})
.catch((e)=>{console.log(e)})

console.log("abhi print hua2")