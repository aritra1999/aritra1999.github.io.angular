import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() item: ItemInterface | undefined;
  constructor() {}
  ngOnInit(): void {}
}

interface ItemInterface {
  title: string; 
  thumbnail: string;
  description: string;
  links: LinksInterface[];
  tags: string[];
  ongoing: boolean;
}

interface LinksInterface {
  type: string;
  link: string;
}