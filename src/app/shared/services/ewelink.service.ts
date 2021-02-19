import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EwelinkService {
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
