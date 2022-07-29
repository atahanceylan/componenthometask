import { Component, Input, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input()
  bodyText!: string;

  mockedCourseList = [
    {
      id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
      title: "JavaScript",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                      not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                      nchanged.`,
      creationDate: new Date("8/3/2021"),
      duration: 160,
      authors: ["Vasiliy Dobkin", "Nicolas Kim"],
    },
    {
      id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "Angular",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: new Date("10/11/2020"),
      duration: 210,
      authors: ["Anna Sidorenko", "Valentina Larina"],
    },
  ];

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  faPen = faPen;
  faTrash = faTrash;
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
