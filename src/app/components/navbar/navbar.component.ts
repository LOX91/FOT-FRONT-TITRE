import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  isAdmin$!: Observable<boolean>;
  isAuth$!: Observable<boolean>;
  user$!: Observable<any>;
  faHome = faHome;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isAuth$ = this.auth.isAuth$;
    this.isAdmin$ = this.auth.admin$;
    this.user$ = this.auth.user$;
  }
}

