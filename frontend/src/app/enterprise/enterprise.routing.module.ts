import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseListComponent } from './components/enterprises-list/enterprise-list.component';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';

const routes: Routes = [
  { path: 'enterprise', component: EnterpriseListComponent },
  { path: 'enterprise/edit/:businessName', component: EnterpriseFormComponent },
  { path: 'enterprise/create', component: EnterpriseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseRoutingModule {}