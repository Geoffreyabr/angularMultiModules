import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminUsersComponent } from './components/feature/page-admin-users/page-admin-users.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';

const routes: Routes = [{ path: 'home', component: AdminHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
