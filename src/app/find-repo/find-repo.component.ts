import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-find-repo',
  templateUrl: './find-repo.component.html',
  styleUrls: ['./find-repo.component.css']
})
export class FindRepoComponent implements OnInit {
  public repos: any = [];
  username:string ='chanaiagwata'

  
  constructor(private repoService: ApiService) { 
    this. repoService.getUserRepos().subscribe(repos=>{
      this.repos=repos;
    })
  }
  
  ngOnInit(){
    
  }

}
