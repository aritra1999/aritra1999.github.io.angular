import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() { }

  ngOnInit(): void {}

}
