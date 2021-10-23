import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor() {
    this.projects = [
      {
      title: 'Mobile App - React Native', 
      description: 'Mobile App using a React Native Bluetooth Low Energy library wrapping Multiplatform Ble Adapter (react-native-ble-plx)', 
      img: 'portfolio2.png', 
      link: 'https://github.com/valentinacmp/test'
    },
    {
      title: 'IP Address Tracker', 
      description: `The challenge is to build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you'll be using the IP Geolocation API by IPify. To generate the map, I use LeafletJS.`, 
      img: 'portfolio4.png', 
      link: 'https://github.com/valentinacmp/ip-address-tracker'
    },
    {
      title: 'Columns preview card component', 
      description: `This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.`, 
      img: 'portfolio3.png', 
      link: 'https://github.com/valentinacmp/columns-preview-card-component-main'
    },
    {
      title: 'Stats preview card component', 
      description: `This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.`, 
      img: 'portfolio5.png', 
      link: 'https://github.com/valentinacmp/stats-preview-card'
    }
    ]
   }

  ngOnInit() {
  }

}
