import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-small',
  templateUrl: './navbar-small.component.html',
  styleUrls: ['./navbar-small.component.scss']
})
export class NavbarSmallComponent implements OnInit {
  @Input() toggleDropDown: any; 
  @Input() toggleLeftBar: any;

  constructor() { }

  ngOnInit(): void {}

}
