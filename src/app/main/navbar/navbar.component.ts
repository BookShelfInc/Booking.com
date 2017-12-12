import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.checkUser();
  }

  checkUser(){
    this.userService.getCurrentUser().subscribe(
      data => {
        this.user = data.json() as User;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
