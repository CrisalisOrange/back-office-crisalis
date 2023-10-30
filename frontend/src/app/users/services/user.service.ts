import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from '../model/User.model';
import { ResponseCreateUser } from '../interfaces/ResponseCreateUser.type';
import { IUserGet } from '../model/UserGet.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URL: string = 'http://localhost:4200/user';

  private userListData: BehaviorSubject<IUserGet[]> = new BehaviorSubject<
    IUserGet[]
  >([]);
  userListData$ = this.userListData.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserListData(); // Cargar la lista de usuarios al iniciar el servicio
  }

  // Cargar la lista de usuarios
  private loadUserListData() {
    this.getAll().subscribe((users) => {
      this.userListData.next(users);
    });
  }

  getAll(): Observable<IUserGet[]> {
    return this.http.get<IUserGet[]>(`${this.URL}/getAll`);
  }

  create(user: IUser): Observable<ResponseCreateUser> {
    return this.http.post<ResponseCreateUser>(
      'http://localhost:4200/auth/new',
      user
    );
  }

  deleteUser(username: { username: string }): Observable<{ mensaje: string }> {
    console.log(username);
    return this.http.post<{ mensaje: string }>(`${this.URL}/disable`, username);
  }

  edit(user: IUser): Observable<ResponseCreateUser> {
    return this.http.post<ResponseCreateUser>(`${this.URL}/edit-user`, user);
  }

  // Actualizar la lista de usuarios
  updateUserListData() {
    this.loadUserListData();
  }
}
