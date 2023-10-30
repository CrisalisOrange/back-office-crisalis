import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IEnterprise } from "../../model/enterprise.model";
import { EnterpriseService } from "../../service/enterprise.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ResponseCreateEnterprise } from "../../interfaces/ResponseCreateEnterprise.type";
import { Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'app-enterprise-form',
    templateUrl: './enterprise-form.component.html',
    styleUrls: ['./enterprise-form.component.css'],
  })

  export class EnterpriseFormComponent implements OnInit {
    public formEnterprise!: FormGroup;
    public editOrCreateText: string = '';
    public isEditing: boolean = false;
    public enterpriseEdit: IEnterprise = {
        businessName: '',
        cuit: '',
        firstNameResponsible: '',
        lastNameResponsible: '',
        dniResponsible: '',
    };

    constructor(
      private formBuilder: FormBuilder,
      private enterpriseService: EnterpriseService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit(): void {
      const state = history.state;
      this.route.params.subscribe((params) => {
        const businessName = params['businessName'];
        if (businessName) {
          this.enterpriseEdit.businessName = businessName;
          this.enterpriseEdit.cuit = state.cuit;
          this.enterpriseEdit.firstNameResponsible = state.firstNameResponsible;
          this.enterpriseEdit.lastNameResponsible = state.lastNameResponsible;
          this.enterpriseEdit.dniResponsible = state.dniResponsible;
        }
      });

      this.isEditing = this.enterpriseEdit.businessName.length ? true : false; 

      this.formEnterprise = this.formBuilder.group({
        businessName: [
          this.enterpriseEdit.businessName,
          [Validators.required, Validators.minLength(6)],
        ],
        cuit: [
          this.enterpriseEdit.cuit,
          [Validators.required, Validators.minLength(8)],
        ],
        firstNameResponsible: [
          this.enterpriseEdit.firstNameResponsible,
          [Validators.required]
        ],
        lastNameResponsible: [
          this.enterpriseEdit.lastNameResponsible,
          [Validators.required]
        ],
        dniNameResponsible: [
          this.enterpriseEdit.dniResponsible,
          [Validators.required]
        ],
      });
      
      this.setButtonText();
    }

    onSubmit() {
      const newEnterprise: IEnterprise = {
        businessName: this.formEnterprise.value.businessName,
        cuit: this.formEnterprise.value.cuit,
        firstNameResponsible: this.formEnterprise.value.firstNameResponsible,
        lastNameResponsible: this.formEnterprise.value.lastNameResponsible,
        dniResponsible: this.formEnterprise.value.dniResponsible
      };
      if (this.isEditing) {
        this.editEnterprise(newEnterprise).subscribe({
          next: (response) => {
            if ('mensaje' in response) {
              console.log(response.mensaje);
              alert(response.mensaje);
            } else {
              throw response;
            }
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.error.mensaje);
            alert(error.error.mensaje);
          },
        });
      } else {
        this.createEnterprise(newEnterprise).subscribe({
          next: (response) => {
            if ('mensaje' in response) {
              console.log(response.mensaje);
              alert(response.mensaje);
            } else {
              throw response;
            }
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.error.mensaje);
            alert(error.error.mensaje);
          },
        });
      }
  }

  setButtonText() {
    if (this.enterpriseEdit.businessName) {
      this.editOrCreateText = 'Editar empresa';
    } else {
      this.editOrCreateText = 'Crear empresa';
    }
  }
  
  createEnterprise(enterprise: IEnterprise): Observable<ResponseCreateEnterprise> {
    return this.enterpriseService.create(enterprise);
  }

  editEnterprise(enterprise: IEnterprise): Observable<ResponseCreateEnterprise> {
    return this.enterpriseService.edit(enterprise);
  }

  goToEnterpriseList() {
    this.router.navigate(['/enterprise']);
  }
}