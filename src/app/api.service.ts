import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string ='https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>(this.BASE_URL+'users')

  }
}
