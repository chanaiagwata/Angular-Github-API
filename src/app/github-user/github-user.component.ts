// import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username:string ='chanaiagwata'

  constructor(private apiService: ApiService) {
   }
   searchProfile(){
     this.apiService.updateUser(this.username);
     this.apiService.getGithubUser().subscribe((user) =>{
       this.user = user;
       console.log(user)
     })
     this.apiService.getUserRepos().subscribe(repos=>{
       this.repos = repos;
       console.log(repos) 
     })
   }


  // lifecyle hook for initializing compnent logic 
  ngOnInit() {
    this.searchProfile()
    
  }
  


}
