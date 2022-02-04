import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from "@angular/common/http"; // Import 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';

import { SharedModule } from 'primeng/api';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TooltipModule} from 'primeng/tooltip';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import { ImageComponent } from './components/image/image.component';
import { VideoComponent } from './components/video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent, 
    ImageComponent,
    VideoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
 
    FormsModule,
    DynamicDialogModule,
   
   
    ToolbarModule,
    HttpClientModule, 
    SharedModule ,
    TooltipModule,
    TableModule,
    FileUploadModule,
		SliderModule,
     ConfirmDialogModule,
		DialogModule,
    CardModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,    
		ToastModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    InputNumberModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
