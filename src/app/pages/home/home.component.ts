import { Component, OnInit } from '@angular/core';
import {EwelinkService} from '../../shared/services/ewelink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  val = false;

  constructor(
    private ewelinkService: EwelinkService,
  ) { }

  ngOnInit(): void {
    console.log(this.ewelinkService.getCredentials());
  }

}
