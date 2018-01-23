import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading: boolean = false;
    constructor(private authService: AuthService, private router: Router) { }

  login = (f: NgForm) => {
      if (f.valid) {
          let that = this;
          this.loading = true;
          this.authService.login(this.model.username, this.model.password).subscribe(
              data => {
                  //this.authService
                  this.router.navigate(['/main', 'dashboard']);
              }, error => {
                  this.loading = false;
              });
      }
  }

  ngOnInit() {
  }

}
