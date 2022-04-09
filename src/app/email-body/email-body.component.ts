import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-body',
  templateUrl: './email-body.component.html',
  styleUrls: ['./email-body.component.scss']
})
export class EmailBodyComponent implements OnInit {
  @Input() screen: string | undefined;
  @Input() page: string | undefined

  constructor() { }
  ngOnInit(): void {
    
  }
}
