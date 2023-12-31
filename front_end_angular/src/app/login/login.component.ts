import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data: { email: string; }) {
    console.log(data);
    localStorage.setItem('email', data.email);
    this.router.navigateByUrl('/user');
  }

}