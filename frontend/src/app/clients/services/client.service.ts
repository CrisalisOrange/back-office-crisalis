import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IClient } from '../model/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly URL: string = 'http://localhost:4200/client';

  private clientListData: BehaviorSubject<IClient[]> = new BehaviorSubject<
    IClient[]
  >([]);
  clientListData$ = this.clientListData.asObservable();

  constructor(private http: HttpClient) {
    this.loadClientListData(); // Cargar la lista de clientes al iniciar el servicio
  }

  // Cargar la lista de clientes
  private loadClientListData() {
    this.getAll().subscribe((clients) => {
      this.clientListData.next(clients);
    });
  }

  getAll(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${this.URL}/getAll`);
  }

//   create(user: IUser): Observable<ResponseCreateUser> {
//     return this.http.post<ResponseCreateUser>(
//       'http://localhost:4200/auth/new',
//       user
//     );
//   }

//   deleteUser(username: { username: string }): Observable<{ mensaje: string }> {
//     console.log(username);
//     return this.http.post<{ mensaje: string }>(`${this.URL}/disable`, username);
//   }

//   edit(user: IUser): Observable<ResponseCreateUser> {
//     return this.http.post<ResponseCreateUser>(`${this.URL}/edit-user`, user);
//   }

//   // Actualizar la lista de usuarios
//   updateUserListData() {
//     this.loadUserListData();
//   }
}