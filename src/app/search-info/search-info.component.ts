import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {
  users: User [] = []

  constructor(private userService:ApiService) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(
    //   resp => {
    //     this.users = resp
    //     // console.log(this.users)
    //   }
    // )
  }

}
