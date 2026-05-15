import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersKey = 'angularUsers';
  private currentUserKey = 'currentAngularUser';

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]') as User[];
  }

  registerUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  loginUser(username: string, password: string): boolean {
    const user = this.getUsers().find(savedUser =>
      savedUser.username === username && savedUser.password === password
    );

    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }

    return false;
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) as User : null;
  }
}
