import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  error = false;

  ngOnInit() {}
  onSubmit(data: NgForm) {
    const { email, password } = data.value;
    this.authService.loginUser(email, password).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
