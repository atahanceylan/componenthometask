import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {
  buttonText!: string;
  iconName!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  course!: Course;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}




