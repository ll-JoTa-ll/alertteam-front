import { Component, OnInit } from '@angular/core';
import { AuthuserService } from '../../services/authuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private authuserService: AuthuserService
  ) { }

  ngOnInit() {
  }

  login() {
    let email = this.model.email;
    let password = this.model.password;

    this.authuserService.loginuser(email, password);
    this.model.email = this.model.password = '';
  }

}
