import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const ewelink = require('ewelink-api/main');

@Injectable({
  providedIn: 'root'
})
export class EwelinkService {

  private apiUrl = 'https://${this.region}-api.coolkit.cc:8080/api'

  // private connection = new eWelink({
  //   email: '<your ewelink email>',
  //   password: '<your ewelink password>'
  // });

  constructor(
    private http: HttpClient,
  ) {
    // this.connection = new eWelink({
    //   email: 'cesar_silk321@hotmail.com',
    //   password: '@Dj.91344356',
    // });
  }

  // async getCredentials(): Promise<any> {
  //   return await this.connection.login();
  // }

  // async getDevices(): Promise<any> {
  //   return await this.connection.getDevices();
  // }
}
