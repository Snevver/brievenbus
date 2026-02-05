import { checkIfConnectedToDatabase } from '../utils/checkDb';

class DatabaseServiceClass {
  async isConnected(): Promise<boolean> {
    return await checkIfConnectedToDatabase();
  }
}

const DatabaseService = new DatabaseServiceClass();
export default DatabaseService;