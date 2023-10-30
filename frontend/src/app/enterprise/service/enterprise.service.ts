import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IEnterpriseGet } from '../model/enterpriseGet.model';
import { IEnterprise } from '../model/enterprise.model';
import { ResponseCreateEnterprise } from '../interfaces/ResponseCreateEnterprise.type';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  private readonly URL: string = 'http://localhost:4200/enterprise';

  private enterpriseListData: BehaviorSubject<IEnterpriseGet[]> = new BehaviorSubject<
    IEnterpriseGet[]
  >([]);
  enterpriseListData$ = this.enterpriseListData.asObservable();

  constructor(private http: HttpClient) {
    this.loadEnterpriseListData(); // Cargar la lista de empresas al iniciar el servicio
  }

  // Cargar la lista de empresas
  private loadEnterpriseListData() {
    this.getAll().subscribe((enterprises) => {
      this.enterpriseListData.next(enterprises);
    });
  }

  getAll(): Observable<IEnterpriseGet[]> {
    return this.http.get<IEnterpriseGet[]>(`${this.URL}/getAll`);
  }

  create(enterprise: IEnterprise): Observable<ResponseCreateEnterprise> {
    return this.http.post<ResponseCreateEnterprise>(
        `${this.URL}/create`, enterprise);
  }

  deleteEnterprise(businessName: { businessName: string }): Observable<{ mensaje: string }> {
    console.log(businessName);
    return this.http.post<{ mensaje: string }>(`${this.URL}/disable`, businessName);
  }

  edit(enterprise: IEnterprise): Observable<ResponseCreateEnterprise> {
    return this.http.post<ResponseCreateEnterprise>(`${this.URL}/edit`, enterprise);
  }

  // Actualizar la lista de empresas
  updateEnterpriseListData() {
    this.loadEnterpriseListData();
  }
}