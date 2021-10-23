import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

  tabs = {
    education : true,
    work : false
  }

  qualifications: array[] ={
    education: [
      {title: 'Computer Engineer', subtitle: 'Universidad Rafael Urdaneta', calender: '2015 - 2019', rounder: true, line: true},
      {title: 'High Diploma', subtitle: 'Colegio La Presentación', calender: '2009 - 2014', rounder: false, line: true}
    ],
    work: [
      {title: 'Frontend Developer', subtitle: 'Forcast - Chile (Remote)', calender: '2019 - 2020', rounder: true, line: true},
      {title: 'Web Developer', subtitle: 'InSite, C.A - Venezuela', calender: '2018 - 2019', rounder: false, line: true},
      {title: 'Intern', subtitle: 'InSite, C.A - Venezuela', calender: '2018 - 2019', rounder: true, line: false}
    ]
  }

  services_modal: boolean;

  constructor() {
    this.services_modal = false;
  }

  ngOnInit() {
  }

  modalOpened(){
    this.services_modal = !this.services_modal;
  }

}
