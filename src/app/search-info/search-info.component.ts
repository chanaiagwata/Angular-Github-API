import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {
  information: ApiService [] = []

  constructor(private informationService:ApiService) { }

  ngOnInit(): void {
    this.informationService.getUsers().subscribe(
      data=> console.log(data) 
    )
  }

}
