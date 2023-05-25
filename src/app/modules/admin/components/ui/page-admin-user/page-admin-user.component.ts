import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-page-admin-user',
  templateUrl: './page-admin-user.component.html',
  styleUrls: ['./page-admin-user.component.css'],
})
export class PageAdminUserComponent {
  @Input()
  user!: User;
}
