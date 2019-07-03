import { RESTDataSource } from 'apollo-datasource-rest';

export class CleanMultiservicesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://clean-multiservices-restapi.herokuapp.com';
  }

  async cleanMultiservices() {
    const jsonResp = await this.get('/');
    return jsonResp.data;
  }
}