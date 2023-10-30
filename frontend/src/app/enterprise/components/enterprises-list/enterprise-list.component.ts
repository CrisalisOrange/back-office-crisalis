import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEnterpriseGet } from '../../model/enterpriseGet.model';
import { EnterpriseService } from '../../service/enterprise.service';


@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css'],
})
export class EnterpriseListComponent implements OnInit {
  public enterpriseListData: IEnterpriseGet[] = [];
  public editableValue: boolean = true;

  constructor(private enterpriseService: EnterpriseService, private router: Router) {}

  ngOnInit(): void {
    this.enterpriseService.enterpriseListData$.subscribe((enterprises) => {
      this.enterpriseListData = enterprises; // Actualiza la lista de empresas
    });

    // Inicialmente, obtén la lista de empresas
    this.enterpriseService.getAll().subscribe((enterprises) => {
      this.enterpriseListData = enterprises;
    });
  }
  // goToCreateForm() {
  //   this.router.navigate(['/enterprise/create']);
  // }
}