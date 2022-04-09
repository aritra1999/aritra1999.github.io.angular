import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  papers: any = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("assets/articles.json").subscribe((data: any) =>{
      this.papers = data;
    })
  }

  ngOnInit(): void {
  }

}
