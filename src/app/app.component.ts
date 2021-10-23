import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public innerWidth: any;

  toggled: boolean = false;
  showHeader: boolean;
  currentTheme: any;
  currentPosition: any;

  @Input() comp: any;

  changeTheme = {
    light: true,
    dark: false
  }

  constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute,
  private router: Router){
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.currentTheme = this.document.body.classList;
    this.currentPosition = 0;
    this.checkInnerWidth();
  }

  ngAfterViewInit(){
    console.log(this.constructor.name);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.checkInnerWidth();
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(e){
    let scroll = e.target.scrollingElement.scrollTop;
    this.currentPosition = scroll;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    this.currentPosition = 0;
  }

  checkInnerWidth(){
    if(this.innerWidth >= 550){
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

  onToggle(){
    this.toggled = !this.toggled;
  }

  changedTheme(){
    this.changeTheme.dark = !this.changeTheme.dark;
    this.changeTheme.light = !this.changeTheme.light;

    if(this.document.body.classList.value){
      this.document.body.classList.remove(this.document.body.classList.value);
    }

    if(this.changeTheme.dark == true && this.changeTheme.light == false){
      this.document.body.classList.add('dark-theme');
    } else if(this.changeTheme.dark == false && this.changeTheme.light == true){
      this.document.body.classList.remove('dark-theme');
    }
  }
}
