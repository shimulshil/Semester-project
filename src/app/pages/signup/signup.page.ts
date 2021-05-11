import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User = {
    name: '',
    email: '',

    password: '',
  };
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signup() {
    const data = {
      name: this.user.name,
      email: this.user.email,
      mobile: this.user.mobile,
      password: this.user.password,
    };

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/login']);
  }
}
