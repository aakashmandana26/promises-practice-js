const axios = require('axios');

 
async function getActivity(){
try {
    
        let response = await axios.get("https://www.boredapi.com/api/activity/");
        console.log(`You could ${response.data.activity}`)
    }
    
 catch (error) {
    console.log(`ERROR! ${error.message}`)
    
}

}
console.log("abhi print hua1")
getActivity();
console.log("abhi print hua2")

