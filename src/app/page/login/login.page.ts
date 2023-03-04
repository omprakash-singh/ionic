import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  onSubmit(data: NgForm) {
    const { email, password } = data.value;
    this.authService.loginUser(email, password).subscribe((data) => {
      console.log(data);
    });
  }
}
