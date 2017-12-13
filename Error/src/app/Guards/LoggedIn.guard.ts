import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../Services/AuthServices';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}
