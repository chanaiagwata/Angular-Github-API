import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user: any = []
  repos: any = [];
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getGithubUser().subscribe(
      data => {
        this.user = data; 
        console.log(this.user)
      }
    )
    this.apiService.getUserRepos().subscribe(
      repos =>{
        this.repos = repos;
        console.log(this.repos)
      }
    ) 
  }
 
}
