import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    phone: '',
    city: '',
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  register(): void {
    this.userService.registerUser(this.user);
    alert('Registration successful. Please login.');
    this.router.navigate(['/login']);
  }
}
