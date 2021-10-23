import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public innerWidth: any;

  showComponents: boolean;
  color_modal: boolean;
  currentTheme: any;
  themeSelected: any;

  themes: any[] = [
    {
      theme: 'yellow',
      number: 67
    },
    {
      theme: 'blue',
      number: 230
    },
    {
      theme: 'pink',
      number: 340
    },
    {
      theme: 'purple',
      number: 250
    }
  ];

  constructor(@Inject(DOCUMENT) private document: Document){
    this.color_modal = false;
    this.currentTheme = 'yellow';
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.checkInnerWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.checkInnerWidth();
  }

  checkInnerWidth(){
    if(this.innerWidth >= 550){
      this.showComponents = true;
    } else {
      this.showComponents = false;
    }
  }

  changedTheme(color: string, number: number){
    let themeSelected = `${color}-theme`;
    this.currentTheme = color;

    const change = () => {
      this.document.documentElement.style.setProperty('--hue-color', `${number}`);
    }

    if(this.currentTheme !== themeSelected){
      switch (color) {
        case 'yellow':
            change();
            break;
        case 'purple':
            change();
            break;
        case 'blue':
            change();
            break;
        case 'pink':
            change();
            break;
        default:
            console.log("Does not exists!");
            break;
      }
    }
  }

  modalOpened(){
    this.color_modal = !this.color_modal;
  }

}
