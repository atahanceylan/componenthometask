import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;

  @Input()
  test!: string;

  ngOnInit(): void {
  }

}
