import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    const isValidUser = this.userService.loginUser(this.username, this.password);

    if (isValidUser) {
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
