import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../app.service';

export class Contact {
  from: string | undefined;
  subject: string | undefined;
  message: string | undefined; 
}

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  @Input() showLeftBar: any;
  @Input() screen: any;

  contact = new Contact();
  showContact: boolean;

  constructor(private contactService: ContactService) { 
    this.showContact = false;
  }

  ngOnInit(): void { }

  toogleContact = () => { 
    this.showContact = !this.showContact; 
    if(this.screen !== "large") this.showLeftBar = false;
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}
