import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { ButtonComponent } from 'src/app/button/button.component';
import { CoursecardComponent } from 'src/app/coursecard/coursecard.component';
import { CourselistComponent } from 'src/app/courselist/courselist.component';
import { InfoComponent } from 'src/app/info/info.component';

const COMPONENTS = [HeaderComponent, ButtonComponent, CoursecardComponent, CourselistComponent, InfoComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, [COMPONENTS]
  ]
})
export class SharedModule { COMPONENTS: any}
