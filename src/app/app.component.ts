import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectme';
  showDropDown: boolean;
  showLeftBar: boolean;

  public getScreenWidth: any;
  public getScreenHeight: any;
  public screen: string; 
  ngOnInit() {}

  constructor(public router: Router) {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.screen = this.setScreenDim();
    this.showDropDown = false; 
    if(this.getScreenWidth <= 1280) {
      this.showLeftBar = false;
    } else {
      this.showLeftBar = true; 
    }
    router.events.subscribe((val) => {
      if(this.router.url !== '/')
        this.showLeftBar = false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.screen = this.setScreenDim();
    if(window.innerWidth <= 1280) {
      this.showLeftBar = false;
    }
  }


  setScreenDim = () => {
    if(this.getScreenWidth <= 600) return "small";  
    if(this.getScreenWidth <= 900) return "medium";  
    return "large";  
  }

  toogleDropDown = () => { this.showDropDown = !this.showDropDown }
  toggleLeftBar = () => { console.log(this.showLeftBar); this.showLeftBar = !this.showLeftBar }

}

