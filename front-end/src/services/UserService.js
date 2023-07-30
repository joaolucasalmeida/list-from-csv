import axios from "axios";

class UserService {
  static async findUsers(query) {
    try {
        return await axios.get(`http://localhost:4000/api/users?q=${query}`);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
  }

  static async uploadFile(body) {
    try {
        return await axios.post('http://localhost:4000/api/files', body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
    } catch (error) {
        console.log('Upload Error', error);
    }
  }
}

export default UserService;
