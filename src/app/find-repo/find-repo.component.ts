import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-find-repo',
  templateUrl: './find-repo.component.html',
  styleUrls: ['./find-repo.component.css']
})
export class FindRepoComponent implements OnInit {
  // repoName:string = 'moveMe'
  // repoData: any = []
  // // username:any
  // user: any = [];
  public repos: any = [];
  username:string ='chanaiagwata'

  
  constructor(private repoService: ApiService) { 
    this. repoService.getUserRepos().subscribe(repos=>{
      this.repos=repos;
    })
  }
  
  // findRepo(){
  //   this.repoService.updateRepo(this.repoName);
  //   this.repoService.searchRepos().subscribe(data=>{
  //     this.repoData = ['data'];
  //     console.log(this.repoData)
     
  //   })
  // }
  // searchProfile(){
  //   this.repoService.updateUser(this.username);

  //   this.repoService.getUserRepos().subscribe(repos=>{
  //     this.repos = repos;
  //     console.log(repos) 
  //   })
  // }
  ngOnInit(){
    
  }

}
