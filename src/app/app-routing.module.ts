import { MoreInfoComponent } from './pages/more-info/more-info.component';
import { SanthoshComponent } from './pages/about-us/santhosh/santhosh.component';
import { SatyamComponent } from './pages/about-us/satyam/satyam.component';
import { VamseeComponent } from './pages/about-us/vamsee/vamsee.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },
  { path: 'page-1', component: TodoListComponent },
  {
    path: 'about-us',
    component: AboutUsComponent,
    children: [
      { path: '', redirectTo: 'santhosh', pathMatch: 'full' },
      { path: 'vamsee', component: VamseeComponent },
      { path: 'satyam', component: SatyamComponent },
      { path: 'santhosh', component: SanthoshComponent },
    ],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    children: [{ path: 'info', component: MoreInfoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
