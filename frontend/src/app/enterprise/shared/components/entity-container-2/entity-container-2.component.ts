import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EnterpriseService } from 'src/app/enterprise/service/enterprise.service';

@Component({
  selector: 'app-entity-container-2',
  templateUrl: './entity-container-2.component.html',
  styleUrls: ['./entity-container-2.component.css']
})
export class EntityContainerComponent2<T extends object> {
  @Input() entities: T[] = [];
  entityKeys: (keyof T)[] = [];
  @Input() title: string = '';
  @Input() isEditable: boolean = false;

  constructor(private enterpriseService: EnterpriseService, private router: Router) {}
  ngOnChanges() {
    if (this.entities && this.entities.length > 0) {
      this.entityKeys = Object.keys(this.entities[0]) as (keyof T)[];
    }
    console.log(this.entities);
  }

  getData(): any[] {
    console.log(
      this.entities.map((item) => this.entityKeys.map((key) => item[key]))
    );
    return this.entities.map((item) => this.entityKeys.map((key) => item[key]));
  }

  deleteEnterpriseHandler(entity: any) {
    const enterprise: { businessName: string } = { businessName: entity.businessName };
    this.enterpriseService.deleteEnterprise(enterprise).subscribe({
      next: (response: any) => {
        this.enterpriseService.updateEnterpriseListData();
        alert(response.mensaje);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  redirectToEdit(entity: any) {
    console.log(entity);
    const navigationExtras: NavigationExtras = {
      state: entity,
    };
    this.router.navigate(['/enterprise/edit', entity['businessName']], navigationExtras);
  }

  goToCreateForm() {
    this.router.navigate(['/enterprise/create']);
  }
}