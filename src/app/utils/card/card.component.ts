import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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