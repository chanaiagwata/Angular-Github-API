import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getgithubUser() {
    throw new Error('Method not implemented.');
  }
  user:any;
   username:string;
  
   
   Github_URL:string = 'https://api.github.com/users/';

   constructor(private http: HttpClient) {
this.username = 'chanaiagwata'

  }
  getGithubUser():Observable<any>{
    return this.http.get<any>(this.Github_URL+this.username)
  }
  getUserRepos():Observable<any>{
    return this.http.get <any[]>(this.Github_URL+this.username+'/repos')
  }
  getOtherProfiles(){
    return this.http.get<any[]>(this.Github_URL)
  }
  getInfoOtherProfiles(){
    return this.http.get(`this.Github_URL${this.username}`)
  }
  getReposOtherProfiles(){
    return this.http.get(this.Github_URL+this.user+'/repos')
  }
}
