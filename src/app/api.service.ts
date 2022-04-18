import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // getgithubUser() {
  //   throw new Error('Method not implemented.');
  // }
  user!:any;
   username!:string;
   repoName!: string;
   
   Github_URL:string = 'https://api.github.com/users/';
   apikey:string= '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'

   constructor(private http: HttpClient) {
     console.log('service doing well')


  }
  getGithubUser():Observable<any>{
    return this.http.get<User>(this.Github_URL+this.username)
  }
  getUserRepos():Observable<any>{
    return this.http.get <Repository []>(this.Github_URL+this.user+'/repos')
  }
  // getOtherProfiles():Observable<any>{
  //   return this.http.get<any>(this.Github_URL)
  // }
  // getUserName(username: string){
  //   this.username =username;
  // }
  // getInfoOtherProfiles():Observable<Repository[]>{
  //   return this.http.get< Repository[]>(this.Github_URL+ 'this.username')
  // }
  searchRepos():Observable<any>{
    return this.http.get<Repository>('https://api.github.com/search/repositories?q='+this.repoName, ({
      headers: new HttpHeaders({Authorization: `token${this.apikey}`})
    }))
  }
  updateRepo(repo:string){
    this.repoName = repo;
  }
  updateUser(username:string){
    this.username = username;
  }

}
