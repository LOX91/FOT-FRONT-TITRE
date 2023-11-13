import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UserLog } from 'src/app/models/user-log';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  isAdmin$!: Observable<boolean>;
  isAuth$!: Observable<boolean>;
  user$!: Observable<UserLog>;
  faHome = faHome;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth$ = this.auth.isAuth$;
    this.isAdmin$ = this.auth.admin$;
    this.user$ = this.auth.user$;
  }

  get isUserLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  deconnect(){
    localStorage.clear()
    this.router.navigate(['/home'])
  }
}

