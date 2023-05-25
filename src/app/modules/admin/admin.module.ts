import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminUsersComponent } from './components/feature/page-admin-users/page-admin-users.component';
import { PageAdminUserComponent } from './components/ui/page-admin-user/page-admin-user.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';

@NgModule({
  declarations: [PageAdminUsersComponent, PageAdminUserComponent, AdminHomeComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
