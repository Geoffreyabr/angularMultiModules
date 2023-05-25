import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-account-users',
  templateUrl: './account-users.component.html',
  styleUrls: ['./account-users.component.css'],
})
export class AccountUsersComponent {
  users: User[] = [];
  randomUser!: User;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      this.users = data;
      let randomIndex: number =
        Math.floor(Math.random() * this.users.length) + 1;
      this.randomUser = this.users[randomIndex];
    });
  }
}
