import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-find-repo',
  templateUrl: './find-repo.component.html',
  styleUrls: ['./find-repo.component.css']
})
export class FindRepoComponent implements OnInit {
  repoName:string = 'moveMe'
  repoData: any = []
  // username:any

  
  constructor(private repoService: ApiService) { }
  findRepo(){
    this.repoService.updateRepo(this.repoName);
    this.repoService.searchRepos().subscribe(data=>{
      this.repoData = ['data'];
      console.log(this.repoData)
     
    })
  }
  ngOnInit(){
    this.findRepo()
  }

}
