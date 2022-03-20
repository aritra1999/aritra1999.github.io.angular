import { Component, HostListener, Output } from '@angular/core';

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

  constructor() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.screen = this.setScreenDim();
    this.showDropDown = false; 
    this.showLeftBar = true; 
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.screen = this.setScreenDim();
  }

  setScreenDim = () => {
    if(this.getScreenWidth <= 600) return "small";  
    if(this.getScreenWidth <= 900) return "medium";  
    return "large";  
  }

  toogleDropDown = () => { this.showDropDown = !this.showDropDown }
  toggleLeftBar = () => { this.showLeftBar = !this.showLeftBar; console.log(this.showLeftBar);}
}
