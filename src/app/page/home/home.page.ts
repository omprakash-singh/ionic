import { onAuthStateChanged } from 'firebase/auth';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private authservice: AuthService,
    private auth: Auth
  ) {}
  name: any = '';
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.name = user.email;
      }
    });
  }

  logout() {
    this.authservice.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
