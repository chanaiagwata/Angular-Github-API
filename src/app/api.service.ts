import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  getgithubUser() {
    throw new Error('Method not implemented.');
  }
  user!:any;
   username!:string;
   repoName!: string;
   
   Github_URL:string = 'https://api.github.com/users/';

   constructor(private http: HttpClient) {
// this.username = 'chanaiagwata'

  }
  getGithubUser():Observable<User>{
    return this.http.get<User>(this.Github_URL+this.username)
  }
  getUserRepos():Observable<Repository[]>{
    return this.http.get <Repository []>(this.Github_URL+this.username+'/repos')
  }
  // getOtherProfiles():Observable<any>{
  //   return this.http.get<any>(this.Github_URL)
  // }
  // getUserName(username: string){
  //   this.username =username;
  // }
  // getInfoOtherProfiles():Observable<Repository[]>{
  //   return this.http.get<Repository[]>(this.Github_URL+ 'this.username')
  // }
  searchRepos(){
    return this.http.get(this.Github_URL+this.username+ '/repos')
  }
  updateRepo(repo:string){
    this.repoName = repo;
  }
  updateUser(username:string){
    this.username = username;
  }

}
