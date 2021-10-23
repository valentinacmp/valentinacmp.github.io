import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills_opened = true;

  showSkills = {
    skills_1 : true,
    skills_2 : false
  }

  skills: [] = {
    frontend: [
      { name: 'html', number: '90%' },
      { name: 'css', number: '90%'},
      { name: 'javascript', number: '85%' },
      { name: 'angular', number: '80%' }
    ],
    backend: [
      { name: 'Node Js', number: '40%' }
    ]
  }

  constructor() {
  }

  ngOnInit() {
  }

  openSkills(opened){
    this.skills_opened = opened;
  }

}
