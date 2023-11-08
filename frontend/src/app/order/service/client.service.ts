import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  orderURL = 'http://localhost:3000/client'
  constructor(private httpClient: HttpClient) { }

  public searchbar(query: string): Observable<any> {
    return this.httpClient.get<any>(this.orderURL + `/getByAnyParameter?query=${query}`).pipe(map(res => res));
  }

  public getClients(): Observable<any> {
    return this.httpClient.get<any[]>(this.orderURL + '/getAll' ).pipe(map(res => res));
  }
}