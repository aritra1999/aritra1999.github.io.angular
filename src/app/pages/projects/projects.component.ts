import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("assets/projects.json").subscribe((data: any) =>{
      this.projects = data;
    })
  }

  ngOnInit(): void {
  }

}
