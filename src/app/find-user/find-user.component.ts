import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  user:any;
  username!: string;
  profile = [];
  repos:any;
  data = [];

  constructor(private service2: ApiService) {
  }
  searchUser(){
    this.service2.getUserName(this.username);

    this.service2.getReposOtherProfiles.subscribe(repos=>{
      
    }) 

  }

  // lifecyle hook for initializing compnent logic 
  ngOnInit(){
    this.searchUser()
  }


}



 