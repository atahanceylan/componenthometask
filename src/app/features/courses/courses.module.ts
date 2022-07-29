import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from 'src/app/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {   
}