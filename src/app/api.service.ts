import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   user:any;
   username!: string;
   repoName!: string;
   
   Github_URL:string = 'https://api.github.com/users/'
  //  apikey:string= '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'

   constructor(private http: HttpClient) {
     this.username ='chanaiagwata'
  }
  ngOnInit(){
    this.http.get<any>('https://api.github.com/users').subscribe((data)=>{
      this.username = data.total;
      console.log(this.username)
    })
  }
  getGithubUser():Observable<any>{
    return this.http.get<User>(this.Github_URL+this.username)
  }
  getUserRepos():Observable<any>{
    return this.http.get <Repository []>(this.Github_URL+this.username+'/repos')
  }
  getOtherProfiles():Observable<any>{
    return this.http.get<any[]>(this.Github_URL)
  }
  // getUserName(username: string){
  //   this.username =username;
  // }
  getInfoOtherProfiles():Observable<any>{
    return this.http.get(this.Github_URL+ this.username)
  }
  searchRepos(user:any){
    let profileRepo =this.http.get(this.Github_URL + user + '/repos')
    // return this.http.get<Repository>('https://api.github.com/users/'+this.username+'/repos?acess_token='+this.apikey);
    // return this.http.get<Repository>('https://api.github.com/search/repositories?q='+this.repoName, ({
    //   headers: new HttpHeaders({Authorization: `token${this.apikey}`})
    // }))
    console.log(profileRepo)
    return profileRepo
  }
  updateRepo(repo:string){
    this.repoName = repo;
  }
  updateUser(username:string){
    this.username = username;
  }

}
