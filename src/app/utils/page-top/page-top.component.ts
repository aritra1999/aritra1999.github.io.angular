import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss']
})
export class PageTopComponent implements OnInit {
  @Input() screen: string | undefined;
  page: String | undefined;
  constructor(private router: Router) {
    this.page = this.router.url.charAt(1).toUpperCase() + this.router.url.slice(2);
    router.events.subscribe((val) => {
      this.page = this.router.url.charAt(1).toUpperCase() + this.router.url.slice(2);
    });
  }
  ngOnInit(): void { }
}
