import axios from 'axios';

class ApiHelper {
  public constructor() {}

  public async getUser(): Promise<void> {
    try {
      const response = await axios.get( '/user?ID=12345' );
      console.log( response );
    } catch ( error ) {
      console.error( error );
    }
  }
}
