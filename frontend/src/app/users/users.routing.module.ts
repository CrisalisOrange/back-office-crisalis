import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { OrderComponent } from '../order/order.component';
import { UserListComponent } from './components/users-list/user-list.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
  },
  { path: 'user/edit/:username', component: UserFormComponent },
  { path: 'user/create', component: UserFormComponent },
  { path: 'order', component: OrderComponent }
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
