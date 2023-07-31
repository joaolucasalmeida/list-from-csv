import axios from "axios";
import { NotificationManager } from 'react-notifications';

class UserService {
  static async findUsers(query) {
    try {
      return await axios.get(`http://localhost:4000/api/users?q=${query}`);
    } catch (error) {
      console.error('Error fetching data: ', error);
      if (error.response.status === 500) {
        NotificationManager.error('', 'Erro ao buscar dados', 3000, () => {
          alert('callback');
        });
      }
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
      if (error.response.status === 500) {
        NotificationManager.error('', 'Erro ao realizar upload', 3000, () => {
          alert('callback');
        });
      }
    }
  }
}

export default UserService;
