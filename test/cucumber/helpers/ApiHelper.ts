const axios = require('axios');

class ApiHelper {
    constructor () {

    }

    async getUser () {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
}
