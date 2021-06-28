import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoListHeaderComponent } from './pages/todo-list/todo-list-header/todo-list-header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SanthoshComponent } from './pages/about-us/santhosh/santhosh.component';
import { SatyamComponent } from './pages/about-us/satyam/satyam.component';
import { VamseeComponent } from './pages/about-us/vamsee/vamsee.component';
import { MoreInfoComponent } from './pages/more-info/more-info.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    SanthoshComponent,
    SatyamComponent,
    VamseeComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
