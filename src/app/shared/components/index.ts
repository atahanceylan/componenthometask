import { HeaderComponent } from 'src/app/header/header.component';
import { ButtonComponent } from 'src/app/button/button.component';
import { CoursecardComponent } from 'src/app/coursecard/coursecard.component';
import { CourselistComponent } from 'src/app/courselist/courselist.component';
import { InfoComponent } from 'src/app/info/info.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HeaderComponent, ButtonComponent, CoursecardComponent, CourselistComponent, InfoComponent],
    exports: [HeaderComponent, ButtonComponent, CoursecardComponent,
        CourselistComponent, InfoComponent]
})
export class IndexModule { }