import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpencesComponent } from './expences/expences.component';
import { HomeComponent } from './home/home.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"expencesBetween",component:ExpencesComponent},{path:"savings",component:SavingsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
