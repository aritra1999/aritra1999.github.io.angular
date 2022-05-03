import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items: any = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("assets/about.json").subscribe((data: any) =>{
      this.items = data;
    })
  }
  
  ngOnInit(): void {
  }

}
