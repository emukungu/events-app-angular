import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector:'nav-bar',
  templateUrl: './nav-bar-template.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    li a.active { color: #F97924; }
    @media (max-width: 1200px) {
      #searchForm {dispaly: none; }
    }
  `]
})

export class NavBarComponent{
    constructor(private authService: AuthService){}

    auth(){
      return this.authService.isAuthenticated();
    }
}
