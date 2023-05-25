import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-page-admin-users',
  templateUrl: './page-admin-users.component.html',
  styleUrls: ['./page-admin-users.component.css'],
})
export class PageAdminUsersComponent {
  users: User[] = [];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((data) => (this.users = data));
  }
}
