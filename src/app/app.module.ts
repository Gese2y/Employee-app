import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import {  FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { RegistrationComponent } from './registration/registration.component';
import { DepartementRegistrationComponent } from './departement-registration/departement-registration.component';
import { RoleRegistrationComponent } from './role-registration/role-registration.component';
import { TasksRegistrationComponent } from './tasks-registration/tasks-registration.component';
import { PerformanceRegistrationComponent } from './performance-registration/performance-registration.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    RegistrationComponent,
    DepartementRegistrationComponent,
    RoleRegistrationComponent,
    TasksRegistrationComponent,
    PerformanceRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,GridModule,DashboardLayoutModule, GridModule,
    MultiSelectModule,
    DropDownListAllModule,
    CheckBoxModule,
    ButtonModule,SplitterModule,DialogModule,
    BrowserModule,
    FormsModule,TreeViewModule,
    ReactiveFormsModule,
    TextBoxModule,
    DatePickerModule,
    DropDownListModule,SidebarModule
  ],
  providers: [FilterService, PageService,CheckBoxSelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
