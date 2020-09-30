import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashaboardComponent } from './dashaboard/dashaboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:DashaboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
