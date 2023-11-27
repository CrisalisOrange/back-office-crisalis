import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormReportsComponent } from './components/form-reports/form-reports.component';
import { ReportRoutingModule } from './report.routing.module';
import { FormsModule } from '@angular/forms';
import { BiggestDiscountComponent } from './components/biggest-discount/biggest-discount.component';
import { TotalDiscountForServicesComponent } from './components/total-discount-for-services/total-discount-for-services.component';
import { DiscriminatedOrderHistoryComponent } from './components/discriminated-order-history/discriminated-order-history.component';

@NgModule({
  declarations: [
    FormReportsComponent,
    BiggestDiscountComponent,
    TotalDiscountForServicesComponent,
    DiscriminatedOrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [FormReportsComponent],
})
export class ReportModule {}
