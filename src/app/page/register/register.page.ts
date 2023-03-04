import { AuthService } from './../../service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onRegister(data: NgForm) {
    const { email, password } = data.value;
    this.authService.register(email, password).subscribe((data) => {
      console.log(data);
    });
  }
}
