import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  @Input()
  courses!: string[];

  @Input()
  editable!: boolean;

  @Output()
  actions!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
