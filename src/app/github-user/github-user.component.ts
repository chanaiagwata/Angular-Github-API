import { NgStyle } from '@angular/common';
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
  username:string =''
  constructor(private apiService: ApiService) {
    this.apiService.getGithubUser().subscribe(
      data => {
        this.user = data; 
        console.log(this.user)
      }
    ) 
   }
   searchProfile(){
     this.apiService.updateUser(this.username);
     this.apiService.getGithubUser().subscribe((user) =>{
       this.user = user;
       console.log(user)
     })
   }


  // lifecyle hook for initializing compnent logic 
  ngOnInit() {
    this.searchProfile()
    
  }
  


}
