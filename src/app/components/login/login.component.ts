import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./bootstrap.css','./login.component.css']
})
export class LoginComponent {
  username:any;

  onClickLog(value: any){
    console.log(value);
  }
}
