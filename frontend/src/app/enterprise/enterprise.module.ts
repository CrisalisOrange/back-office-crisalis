import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterpriseListComponent } from './components/enterprises-list/enterprise-list.component';
import { EnterpriseFormComponent } from './components/enterprise-form/enterprise-form.component';
import { EntityContainerComponent2 } from './shared/components/entity-container-2/entity-container-2.component';


@NgModule({
  declarations: [
    EnterpriseListComponent,
    EnterpriseFormComponent,
    EntityContainerComponent2
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EnterpriseListComponent, EnterpriseFormComponent],
})
export class EnterpriseModule {}