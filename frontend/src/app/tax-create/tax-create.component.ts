import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaxService } from '../service/tax.service';
import { Tax } from '../model/tax';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseCreateUser } from '../users/interfaces/ResponseCreateUser.type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-create',
  templateUrl: './tax-create.component.html',
  styleUrls: ['./tax-create.component.css']
})
export class TaxCreateComponent implements OnInit {
  public formTax!: FormGroup;
  public editOrCreateText: string = '';
  public isEditing: boolean = false;


  taxEdit: Tax = {
    id:0,
    taxName: '',
    taxPercentage: 0,
  };

  constructor(
    private formBuilder: FormBuilder,
    private taxService: TaxService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const state = history.state;
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.taxEdit.id = id;
        this.taxEdit.taxName = state.taxName;
        this.taxEdit.taxPercentage = state.taxPercentage;
      }
    });
    console.log(this.taxEdit.id)
    this.isEditing = this.taxEdit.id!=0;//this.taxEdit.taxPercentage.toString.length ? true : false;

    this.formTax = this.formBuilder.group({
      id: [
        this.taxEdit.id,
        [Validators.required, Validators.minLength(1)],
      ],
      taxName: [
        this.taxEdit.taxName,
        [Validators.required, Validators.minLength(4)],
      ],
      taxPercentage: [
        this.taxEdit.taxPercentage,
        [Validators.required, Validators.minLength(1)],
      ],
    });
    this.setButtonText();
  }
  
  setButtonText() {
    if (this.taxEdit.taxName) {
      this.editOrCreateText = 'Editar impuesto';
    } else {
      this.editOrCreateText = 'Crear impuesto';
    }
  }

  editTax(tax: Tax): Observable<ResponseCreateUser> {
    console.log(tax)
    return this.taxService.editTax(tax);
  }

  createTax(tax: Tax): Observable<ResponseCreateUser> {
    return this.taxService.createTax(tax);
  }


  onSubmit() {
    const newTax: Tax = {
      id: this.formTax.value.id,
      taxName: this.formTax.value.taxName,
      taxPercentage: this.formTax.value.taxPercentage
    };
    if (this.isEditing) {
      this.editTax(newTax).subscribe({
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
      this.createTax(newTax).subscribe({
        next: (response) => {
          if ('mensaje' in response) {
            
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
    Swal.fire('Éxito',undefined,'success')
            this.goToTaxList()
  }
  goToTaxList() {
    this.router.navigate(['/taxlist']);
  }
}