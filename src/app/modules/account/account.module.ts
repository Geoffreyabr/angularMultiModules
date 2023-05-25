import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountUsersComponent } from './components/feature/account-users/account-users.component';
import { AccountUserComponent } from './components/ui/account-user/account-user.component';
import { AccountHomeComponent } from './pages/account-home/account-home.component';


@NgModule({
  declarations: [
    AccountUsersComponent,
    AccountUserComponent,
    AccountHomeComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
