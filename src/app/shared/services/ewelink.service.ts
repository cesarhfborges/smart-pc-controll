import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const ewelink = require('ewelink-api');

@Injectable({
  providedIn: 'root'
})
export class EwelinkService {

  private connection = new ewelink({
    email: '<your ewelink email>',
    password: '<your ewelink password>',
    region: '<your ewelink region>',
  });

  constructor(
    private http: HttpClient,
  ) {
  }

  async getDevices() {
    return await this.connection.getDevices();
  }

  async getCredentials() {
    return await this.connection.getCredentials();
  }
}
