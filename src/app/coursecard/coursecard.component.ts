import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {

  title: string = "Angular";
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat nisi vel dui maximus, et bibendum mi ultrices. Sed dictum at erat et bibendum. Etiam luctus lectus sit amet blandit pretium. Quisque aliquet tortor ut libero facilisis, eget suscipit arcu sodales. Ut at turpis nisl. Sed neque lorem, consequat vel nulla quis, bibendum scelerisque sapien. Integer euismod nisi sit amet nunc commodo, id venenatis felis mattis. Nam massa ligula, facilisis mollis laoreet quis, auctor at elit.";
  creationDate: Date = new Date();
  duration: number = 121;
  authors: string[] =["Dave Haisenberg, Tony Ja"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
