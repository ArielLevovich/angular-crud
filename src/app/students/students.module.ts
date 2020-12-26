import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentsRoutingModule} from './students-routing.module';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {NgbdSortableHeaderDirective} from './sortable.directive';

@NgModule({
    declarations: [EmployeesListComponent, NgbdSortableHeaderDirective],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        StudentsRoutingModule
    ]
})
export class StudentsModule { }
